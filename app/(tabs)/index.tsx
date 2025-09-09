import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-2xl font-serif">Bienvenida a Arándano</Text>
      <Text className="text-gray-400 mt-2">Moda de lujo, diseñada para ti</Text>
    </View>
  );
}
