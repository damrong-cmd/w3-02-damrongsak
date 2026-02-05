import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#05000A" />

            {/* ส่วนหัว Logo */}
            <View style={styles.headerSection}>
                <Text style={styles.logoText}>GEOMETRY</Text>
                <Text style={styles.subLogoText}>TOOLS APP</Text>
                <Text style={styles.description}>เลือกโปรแกรมคำนวณพื้นที่ที่คุณต้องการ</Text>
            </View>

            {/* กลุ่มปุ่มเมนู */}
            <View style={styles.menuContainer}>
                
                {/* ปุ่มไปหน้าสี่เหลี่ยม */}
                <TouchableOpacity 
                    style={styles.menuButton} 
                    onPress={() => router.navigate('/square')}
                    activeOpacity={0.8}
                >
                    <View style={styles.iconBox}>
                         <Text style={styles.icon}>🟦</Text>
                    </View>
                    <View style={styles.textGroup}>
                        <Text style={styles.btnTitle}>Square Area</Text>
                        <Text style={styles.btnSub}>คำนวณพื้นที่สี่เหลี่ยม</Text>
                    </View>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>

                {/* ปุ่มไปหน้าสามเหลี่ยม */}
                <TouchableOpacity 
                    style={styles.menuButton} 
                    onPress={() => router.navigate('/triangle')}
                    activeOpacity={0.8}
                >
                    <View style={[styles.iconBox, styles.iconBoxTriangle]}>
                         <Text style={styles.icon}>📐</Text>
                    </View>
                    <View style={styles.textGroup}>
                        <Text style={styles.btnTitle}>Triangle Area</Text>
                        <Text style={styles.btnSub}>คำนวณพื้นที่สามเหลี่ยม</Text>
                    </View>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>

            </View>

            <Text style={styles.footer}>v1.0.0 Powered by React Native</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#05000A", // ดำเหลือบม่วง
        justifyContent: "center", 
        alignItems: "center",
        padding: 20,
    },    
    // Header Styles
    headerSection: {
        alignItems: 'center',
        marginBottom: 50,
    },
    logoText: { 
        fontSize: 42, 
        fontWeight: "900", 
        color: "#E0AAFF", // ม่วงลาเวนเดอร์
        letterSpacing: 2,
        textShadowColor: '#7B2CBF',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 15, // เรืองแสง
    },
    subLogoText: {
        fontSize: 18,
        color: "#00FF9D", // เขียวนีออน
        fontWeight: "bold",
        letterSpacing: 5,
        marginBottom: 10,
    },
    description: {
        color: "#9D4EDD",
        fontSize: 14,
    },
    // Menu Styles
    menuContainer: { 
        width: "100%", 
        gap: 20,
    },
    menuButton: {
        backgroundColor: "#10001F", // พื้นหลังปุ่มสีมืด
        borderRadius: 20,
        padding: 20,
        flexDirection: "row", // จัดเรียงแนวนอน
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#3C096C",
        // เงา
        shadowColor: "#BB86FC",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    iconBox: {
        width: 50,
        height: 50,
        backgroundColor: "rgba(60, 9, 108, 0.3)", // พื้นหลังไอคอนจางๆ
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
        borderWidth: 1,
        borderColor: "#7B2CBF",
    },
    iconBoxTriangle: {
        borderColor: "#FF9800", // เปลี่ยนสีขอบไอคอนสามเหลี่ยมให้ต่างกัน
        backgroundColor: "rgba(255, 152, 0, 0.1)",
    },
    icon: {
        fontSize: 24,
    },
    textGroup: {
        flex: 1, // ดันให้เต็มพื้นที่
    },
    btnTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 2,
    },
    btnSub: {
        fontSize: 12,
        color: "#aaa",
    },
    arrow: {
        fontSize: 30,
        color: "#555",
        fontWeight: "200",
    },
    // Footer
    footer: {
        position: 'absolute',
        bottom: 30,
        color: "#333",
        fontSize: 12,
    }
});