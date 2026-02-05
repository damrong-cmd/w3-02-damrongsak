import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function TriangleScreen() {
    const router = useRouter(); 

    // เปลี่ยนชื่อตัวแปรให้ตรงกับสูตร: ด้าน 1 x ด้าน 2
    const [side1, setSide1] = useState("");   
    const [side2, setSide2] = useState(""); 
    const [area, setArea] = useState(0);    

    function calculateArea() {
        // สูตร: (ด้าน 1 * ด้าน 2) / 2
        // เช่น 3 * 4 / 2 = 6
        let result = (Number(side1) * Number(side2)) / 2;
        setArea(result); 
        Keyboard.dismiss(); // สั่งปิดคีย์บอร์ดเมื่อคำนวณเสร็จ
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#05000A" />

                <View style={styles.headerContainer}>
                     <Text style={styles.headerTitle}>TRIANGLE 📐</Text>
                     <Text style={styles.headerSubtitle}>คำนวณพื้นที่สามเหลี่ยมมุมฉาก</Text>
                </View>

                {/* ส่วนแสดงผลลัพธ์ */}
                <View style={styles.resultCard}>
                    <Text style={styles.resultLabel}>AREA (พื้นที่)</Text>
                    <Text style={styles.resultValue}>{area > 0 ? area : "0.00"}</Text>
                    <Text style={styles.resultUnit}>ตารางเซนติเมตร</Text>
                </View>

                {/* ช่องกรอกข้อมูล */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>ด้านประกอบมุมฉาก 1 (ซม.)</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="เช่น 3"
                        placeholderTextColor="#6b4c85"
                        keyboardType="numeric" 
                        value={side1}
                        onChangeText={setSide1} 
                    />

                    <Text style={styles.label}>ด้านประกอบมุมฉาก 2 (ซม.)</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="เช่น 4"
                        placeholderTextColor="#6b4c85"
                        keyboardType="numeric"
                        value={side2}
                        onChangeText={setSide2} 
                    />
                </View>

                {/* ปุ่มคำสั่ง */}
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.calcButton} onPress={calculateArea}>
                        <Text style={styles.calcButtonText}>คำนวณพื้นที่</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.navGroup}>
                        <TouchableOpacity style={styles.navButton} onPress={() => router.navigate('/square')}>
                             <Text style={styles.navButtonText}>ไปหน้าสี่เหลี่ยม</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.navButton, styles.backButton]} onPress={() => router.navigate('/')}>
                             <Text style={styles.navButtonText}>กลับหน้าแรก</Text>
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
        marginBottom: 30,
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: "900",
        color: "#E0AAFF",
        letterSpacing: 2,
    },
    headerSubtitle: {
        fontSize: 14,
        color: "#9D4EDD",
        marginTop: 5,
    },
    // การ์ดผลลัพธ์
    resultCard: {
        backgroundColor: "#10001F",
        padding: 25,
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 30,
        borderWidth: 1,
        borderColor: "#3C096C",
        // เงาเรืองแสง
        shadowColor: "#00FF9D",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    resultLabel: {
        fontSize: 14,
        color: "#E0AAFF",
        letterSpacing: 1,
        marginBottom: 5,
    },
    resultValue: {
        fontSize: 48, // ตัวเลขใหญ่สะใจ
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
    // Input
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
    // Button
    buttonGroup: {
        gap: 15,
    },
    calcButton: {
        backgroundColor: "#7B2CBF", // ม่วงสด
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#E0AAFF",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 5,
    },
    calcButtonText: {
        color: "#fff",
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
    }
});