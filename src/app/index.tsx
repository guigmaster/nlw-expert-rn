import { useRef, useState } from "react";
import { FlatList, SectionList, Text, View } from "react-native";

import { Link } from "expo-router";

import { CATEGORIES, MENU, ProductProps } from "@/utils/data/products";

import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";
import { Product } from "@/components/product";

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  const sectionListRef = useRef<SectionList<ProductProps>>(null);

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === selectedCategory
    );

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0
      })
    }
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

      <SectionList
        ref={sectionListRef}
        sections={MENU}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-white font-heading mt-8 mb-3">{title}</Text>
        )}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        className="flex-1 p-5"
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  )
}