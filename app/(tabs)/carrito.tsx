import { Text, View } from "react-native";

export default function CartScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-2xl font-serif">Carrito</Text>
      <Text className="text-gray-400 mt-2">Tus artículos seleccionados</Text>
    </View>
  );
}
