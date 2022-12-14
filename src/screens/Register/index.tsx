import { useState } from 'react';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { useForm } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';

import uuid from 'react-native-uuid';

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import { Photo } from '../../components/Photo';
import { FormButton } from '../../components/FormButton';
import { FormInput } from '../../components/FormInput';
import { CategorySelectButton } from '../../components/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import { ButtonsContainer, UploadPhotoContainer, Container, FormContainer, Header, InputsContainer, Title, UploadPhotoTitle } from './styles';


interface FormData {
    name: string;
    amount: number;
    date: string;
}

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('Preencha o nome do pedido para continuar!'),
    amount: Yup
        .number()
        .typeError('Informe um valor numérico')
        .positive('O valor deve ser positivo')
        .required('Preencha o valor para contiunuar!'),
    date: Yup
        .string()
        .required('Preencha a data do pedido para continuar!'),
})

export function Register() {

    const [image, setImage] = useState('');

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
        icon: 'path'
    });

    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const navigator = useNavigation();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleOpenCategoryModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseCategoryModal() {
        setCategoryModalOpen(false);
    }


    async function handleAddOrder(form: FormData) {

        const date = form.date;

        const [day, month, year] = date.split('/');
        const result = [year, month, day].join('/');
        const dateResult = new Date(result);
        const dateFormatted = format(dateResult, 'MMMM, yyyy', { locale: ptBR });

        const newOrder = {
            id: String(uuid.v4()),
            name: form.name,
            amount: form.amount,
            category: category.key,
            date: form.date,
            dateFormatted
        }

        handleUpload(newOrder.id);

        firestore()
            .collection('orders')
            .doc(newOrder.id)
            .set({ ...newOrder, createdAt: firestore.FieldValue.serverTimestamp()})
            .then(() => {
                Alert.alert('Sucesso!', 'Pedido adicionado')
            })
            .catch((error) => console.log('ERRO >>>> ', error));

        reset();
        setCategory({
            key: 'category',
            name: 'Categoria',
            icon: 'path'
        });
        setImage('');

        navigator.navigate('Home');

    }

    async function handlePickImage() {

        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status == 'granted') {

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                aspect: [4, 4],
                quality: 1,
            });

            if (!result.cancelled) {

                const { uri } = result as ImagePicker.ImageInfo;

                setImage(decodeURI(uri));
            }
        }
    };

    async function handleUpload(orderId: string) {

        const reference = storage().ref(`/images/${orderId}`);

        reference.putFile(image)
        .then(() => console.log('Upload concluído'))
        .catch(error => console.log('ERROR >>>> ', error));

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>

                <Header>
                    <Title>Preencha as informações do pedido</Title>
                </Header>

                <FormContainer>

                    <InputsContainer>
                        <FormInput
                            name="name"
                            control={control}
                            placeholder="nome"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />

                        <FormInput
                            name="amount"
                            control={control}
                            placeholder="valor"
                            keyboardType="numeric"
                            error={errors.amount && errors.amount.message}
                        />

                        <FormInput
                            name="date"
                            control={control}
                            placeholder="data do pedido (dia/mês/ano)"
                            error={errors.amount && errors.amount.message}
                        />

                        <CategorySelectButton
                            title={category.name}
                            onPress={handleOpenCategoryModal}
                        />
                    </InputsContainer>

                    <UploadPhotoContainer>
                        <UploadPhotoTitle>Faça o upload do print do pedido para consulta</UploadPhotoTitle>
                        <Photo uri={image} onPress={handlePickImage} />
                    </UploadPhotoContainer>

                    <ButtonsContainer>
                        <FormButton title='Cadastrar' onPress={handleSubmit(handleAddOrder)} />
                    </ButtonsContainer>

                </FormContainer>

                <Modal testID="modal-category" visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseCategoryModal}
                    />
                </Modal>

            </Container>
        </TouchableWithoutFeedback>
    )
}