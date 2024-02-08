import { useState } from "react";
import { FlatList, View } from "react-native";

import { CATEGORIES } from "@/utils/data/products";

import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça o seu pedido!" />

      <FlatList
        horizontal
        data={CATEGORIES}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            iSSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
      />
    </View>
  )
}