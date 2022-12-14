import React from "react";
import { FlatList } from "react-native";

import { FormButton } from "../../components/FormButton";

import { categories } from "../../utils/categories";

import {
    Category,
    Container,
    Footer,
    Header,
    Icon,
    Name,
    Separator,
    Title
} from "./styles";

interface Category {
    key: string;
    name: string;
    icon: string;
}

interface Props {
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}

export function CategorySelect({
    category,
    setCategory,
    closeSelectCategory
}: Props) {

    function handleCategorySelect(category: Category) {
        setCategory(category);
    }

    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <FlatList
                data={categories}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <Category
                        onPress={() => handleCategorySelect(item)}
                        isActive={category.key === item.key}
                    >
                        <Icon
                            source={{ uri: item.icon}}
                        />
                        <Name
                            isActive={category.key === item.key}
                        >
                            {item.name}
                        </Name>
                    </Category>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />

            <Footer>
                <FormButton
                    title="selecionar"
                    onPress={closeSelectCategory}
                />
            </Footer>
        </Container>
    )
}