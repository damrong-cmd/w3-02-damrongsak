
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>หน้า 1: เมนูหลัก</Text>
            <View style={styles.buttonGroup}>
                <Button title="ไปหน้า 2 (สี่เหลี่ยม)" onPress={() => router.navigate('/square')} color="#4A90E2" />
                <Button title="ไปหน้า 3 (สามเหลี่ยม)" onPress={() => router.navigate('/triangle')} color="#FF9800" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center", gap: 20 , borderRadius: 10},    
    mainTitle: { fontSize: 22, fontWeight: "bold", color: "white" },
    buttonGroup: { width: "80%", gap: 10}


});