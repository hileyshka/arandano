import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function PerfilScreen() {
  const [nombre, setNombre] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const guardar = () => {
    console.log("Datos guardados:", { nombre, altura, peso });
    alert("Medidas guardadas ✅ (más adelante se guardarán en Supabase)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#888"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <Button title="Guardar" onPress={guardar} />
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
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#111",
    padding: 12,
    borderRadius: 8,
    color: "#fff",
    marginBottom: 15,
  },
});
