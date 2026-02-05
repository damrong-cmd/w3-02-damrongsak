import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Square() {
    const router = useRouter();
    const [w, setW] = useState("");
    const [l, setL] = useState("");
    const [area, setArea] = useState(0);

    function calculate() {
        setArea(Number(w) * Number(l));
        Keyboard.dismiss(); // สั่งปิดคีย์บอร์ดเมื่อกดคำนวณ
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#05000A" />

                {/* Header */}
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>SQUARE 🟦</Text>
                    <Text style={styles.headerSubtitle}>คำนวณพื้นที่สี่เหลี่ยม</Text>
                </View>

                {/* ส่วนแสดงผลลัพธ์ (Result Card) */}
                <View style={styles.resultCard}>
                    <Text style={styles.resultLabel}>TOTAL AREA</Text>
                    <Text style={styles.resultValue}>{area > 0 ? area : "0.00"}</Text>
                    <Text style={styles.resultUnit}>ตารางเซนติเมตร</Text>
                </View>

                {/* ส่วนกรอกข้อมูล */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>ความกว้าง (Width)</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="ระบุความกว้าง..." 
                        placeholderTextColor="#6b4c85"
                        keyboardType="numeric" 
                        onChangeText={setW} 
                        value={w}
                    />

                    <Text style={styles.label}>ความยาว (Length)</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="ระบุความยาว..." 
                        placeholderTextColor="#6b4c85"
                        keyboardType="numeric" 
                        onChangeText={setL} 
                        value={l}
                    />
                </View>

                {/* ปุ่มกด */}
                <View style={styles.buttonGroup}>
                    {/* ปุ่มคำนวณ (เด่นสุด) */}
                    <TouchableOpacity style={styles.calcButton} onPress={calculate} activeOpacity={0.8}>
                        <Text style={styles.calcButtonText}>CALCULATE</Text>
                    </TouchableOpacity>

                    {/* ปุ่มนำทาง */}
                    <View style={styles.navGroup}>
                        <TouchableOpacity 
                            style={styles.navButton} 
                            onPress={() => router.navigate('/triangle')}
                        >
                            <Text style={styles.navButtonText}>ไปหน้าสามเหลี่ยม ▶</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.navButton, styles.backButton]} 
                            onPress={() => router.navigate('/')}
                        >
                            <Text style={styles.navButtonText}>🏠 หน้าแรก</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#05000A", // ดำเหลือบม่วง
        padding: 20,
    },
    headerContainer: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: "900",
        color: "#E0AAFF", // ม่วงลาเวนเดอร์
        letterSpacing: 2,
    },
    headerSubtitle: {
        fontSize: 14,
        color: "#9D4EDD",
        marginTop: 5,
    },
    // Result Card Style
    resultCard: {
        backgroundColor: "#10001F",
        padding: 25,
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 25,
        borderWidth: 1,
        borderColor: "#3C096C",
        shadowColor: "#00FF9D", // เงาสีเขียว
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    resultLabel: {
        fontSize: 12,
        color: "#E0AAFF",
        letterSpacing: 1,
        marginBottom: 5,
        fontWeight: "bold",
    },
    resultValue: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#00FF9D", // เขียวนีออน
        textShadowColor: 'rgba(0, 255, 157, 0.4)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10,
    },
    resultUnit: {
        fontSize: 16,
        color: "#fff",
        opacity: 0.7,
    },
    // Inputs
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        color: "#C77DFF",
        marginBottom: 8,
        fontSize: 14,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#18022E",
        color: "#fff",
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#3C096C",
        fontSize: 16,
    },
    // Buttons
    buttonGroup: {
        gap: 15,
    },
    calcButton: {
        backgroundColor: "#00b894", // เปลี่ยนปุ่มคำนวณเป็นสีเขียวให้เข้ากับผลลัพธ์ หรือจะใช้ม่วง #7B2CBF ก็ได้
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#00b894",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 5,
    },
    calcButtonText: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    navGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    navButton: {
        flex: 1,
        backgroundColor: "#240046",
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#3C096C",
    },
    backButton: {
        backgroundColor: "#121212",
        borderColor: "#333",
    },
    navButtonText: {
        color: "#E0AAFF",
        fontWeight: "600",
        fontSize: 14,
    }
});