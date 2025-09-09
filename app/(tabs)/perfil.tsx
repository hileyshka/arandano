import { useState } from "react";
import { Alert, Button, ScrollView, Text, TextInput } from "react-native";
import { supabase } from "../../supabase"; // ajusta la ruta si es necesario

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [pecho, setPecho] = useState("");
  const [cintura, setCintura] = useState("");
  const [cadera, setCadera] = useState("");

  const saveMeasurements = async () => {
    const { data, error } = await supabase.from("users").insert([{
      name,
      email,
      altura: parseFloat(altura),
      peso: parseFloat(peso),
      pecho: parseFloat(pecho),
      cintura: parseFloat(cintura),
      cadera: parseFloat(cadera),
    }]);

    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Éxito", "Tus medidas fueron guardadas");
      // Limpiar campos
      setName("");
      setEmail("");
      setAltura("");
      setPeso("");
      setPecho("");
      setCintura("");
      setCadera("");
    }
  };

  return (
    <ScrollView className="flex-1 bg-black p-4">
      <Text className="text-white text-2xl font-serif mb-4">Perfil & Medidas</Text>

      <TextInput placeholder="Nombre" placeholderTextColor="#888" className="bg-gray-800 text-white w-full p-2 mb-2 rounded" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" placeholderTextColor="#888" className="bg-gray-800 text-white w-full p-2 mb-2 rounded" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Altura (cm)" placeholderTextColor="#888" keyboardType="numeric" className="bg-gray-800 text-white w-full p-2 mb-2 rounded" value={altura} onChangeText={setAltura} />
      <TextInput placeholder="Peso (kg)" placeholderTextColor="#888" keyboardType="numeric" className="bg-gray-800 text-white w-full p-2 mb-2 rounded" value={peso} onChangeText={setPeso} />
      <TextInput placeholder="Pecho (cm)" placeholderTextColor="#888" keyboardType="numeric" className="bg-gray-800 text-white w-full p-2 mb-2 rounded" value={pecho} onChangeText={setPecho} />
      <TextInput placeholder="Cintura (cm)" placeholderTextColor="#888" keyboardType="numeric" className="bg-gray-800 text-white w-full p-2 mb-2 rounded" value={cintura} onChangeText={setCintura} />
      <TextInput placeholder="Cadera (cm)" placeholderTextColor="#888" keyboardType="numeric" className="bg-gray-800 text-white w-full p-2 mb-4 rounded" value={cadera} onChangeText={setCadera} />

      <Button title="Guardar Medidas" onPress={saveMeasurements} />
    </ScrollView>
  );
}
