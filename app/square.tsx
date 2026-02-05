import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Square() {
    const router = useRouter();
    const [w, setW] = useState("");
    const [l, setL] = useState("");
    const [area, setArea] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>หน้า 2: พื้นที่สี่เหลี่ยม</Text>
            <Text style={styles.result}>พื้นที่: {area} ตร.ซม.</Text>

            <TextInput style={styles.input} placeholder="กว้าง" keyboardType="numeric" onChangeText={setW} />
            <TextInput style={styles.input} placeholder="ยาว" keyboardType="numeric" onChangeText={setL} />

            <View style={styles.buttonGroup}>
                <Button title="คำนวณ" onPress={() => setArea(Number(w) * Number(l))} color="green" />
                <Button title="ไปหน้า 3 (สามเหลี่ยม)" onPress={() => router.navigate('/triangle')} color="#FF9800" />
                <Button title="กลับหน้าแรก" onPress={() => router.navigate('/')} color="#666" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "violet", justifyContent: "center", alignItems: "center", gap: 10 },
    mainTitle: { fontSize: 20, fontWeight: "bold" },
    result: { fontSize: 18, backgroundColor: "white", padding: 10, width: "80%", textAlign: "center" },
    input: { width: "80%", backgroundColor: "white", padding: 10, borderRadius: 5 },
    buttonGroup: { width: "80%", gap: 8 }
});