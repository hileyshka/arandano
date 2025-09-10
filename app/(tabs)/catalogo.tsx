import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const productos = [
  { id: "1", nombre: "Vestido elegante", precio: "$120", imagen: "https://via.placeholder.com/200x250" },
  { id: "2", nombre: "Blazer negro", precio: "$150", imagen: "https://via.placeholder.com/200x250" },
  { id: "3", nombre: "Zapatos de lujo", precio: "$200", imagen: "https://via.placeholder.com/200x250" },
];

export default function CatalogoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo</Text>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.image} />
            <Text style={styles.productName}>{item.nombre}</Text>
            <Text style={styles.price}>{item.precio}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#111",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 10,
  },
  productName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  price: {
    color: "#ccc",
    marginTop: 5,
  },
});
