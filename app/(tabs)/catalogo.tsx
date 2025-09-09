import { Text, View } from "react-native";

export default function CatalogScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-2xl font-serif">Catálogo</Text>
      <Text className="text-gray-400 mt-2">Explora nuestras prendas exclusivas</Text>
    </View>
  );
}
