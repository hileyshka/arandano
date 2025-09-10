import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bienvenidos a Arándano</Text>
      <Text style={styles.subtitle}>
        Tienda de ropa y accesorios con modelo en probador virtual.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>Explora las últimas colecciones</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>Accede a tu carrito</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Visualízate con el probador virtual
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // negro minimalista
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  cardText: {
    color: "#eee",
    fontSize: 16,
  },
});
