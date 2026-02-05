import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function TriangleScreen() {
    const router = useRouter(); // ตัวจัดการการเปลี่ยนหน้า

    // 1. การประกาศ State (ถังเก็บข้อมูล)
    const [base, setBase] = useState("");   // เก็บค่าฐาน (ด้านที่ 1)
    const [height, setHeight] = useState(""); // เก็บค่าสูง (ด้านที่ 2)
    const [area, setArea] = useState(0);    // เก็บผลลัพธ์พื้นที่

   // 2. ฟังก์ชันการคำนวณ (Logic) 
    function calculateArea() {
        // แปลงข้อความเป็นตัวเลขด้วย Number()
        // สูตรสามเหลี่ยมมุมฉาก: (ฐาน * สูง) / 2
        let result = (Number(base) * Number(height)) / 2;
        setArea(result); // นำผลลัพธ์ไปเก็บใน area เพื่อแสดงบนหน้าจอ
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>หน้า 3: คำนวณสามเหลี่ยม</Text>

            {/* 3. ส่วนแสดงผลลัพธ์ */}
            <View style={styles.resultCard}>
                <Text style={styles.resultValue}>{area} พื้นที่คือ:</Text>
                <Text style={styles.resultValue}>{area} ตร.ซม.</Text>
            </View>

            {/* 4. ช่องกรอกข้อมูล (Input) */}
            <TextInput 
                style={styles.input}
                placeholder="กรอกความยาวฐาน (ซม.)"
                keyboardType="numeric" // โชว์แป้นพิมพ์ตัวเลข
                value={base}
                onChangeText={setBase} // พิมพ์ปุ๊บ เก็บค่าลงตัวแปร base ปั๊บ
            />

            <TextInput 
                style={styles.input}
                placeholder="กรอกความสูง (ซม.)"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight} // เก็บค่าลงตัวแปร height
            />

            {/* 5. ปุ่มคำสั่งต่างๆ */}
            <View style={styles.buttonGroup}>
                <Button title="คำนวณพื้นที่" onPress={calculateArea} color="#4CAF50" />
                
                {/* ปุ่มสลับหน้า */}
                <Button title="ไปหน้า 2 (สี่เหลี่ยม)" onPress={() => router.navigate('/square')} color="#2196F3" />
                <Button title="กลับหน้าแรก" onPress={() => router.navigate('/')} color="#666" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "violet", // คุมโทนสีม่วงเหมือนหน้าอื่นๆ
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    resultCard: {
        backgroundColor: "white",
        width: "80%",
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
        marginBottom: 20,
        elevation: 5, // เพิ่มเงาให้ดูมีมิติ
    },
    resultValue: {
        fontSize: 30,
        fontWeight: "bold",
        color: "red",
    },
    input: {
        width: "80%",
        height: 50,
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    buttonGroup: {
        width: "80%",
        gap: 10, // เว้นระยะห่างระหว่างปุ่ม
    }
});