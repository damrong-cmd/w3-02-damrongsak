import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";


export default function Square() {
    
    
    // พท . สี่เหลียม = กว้าง * ยาว
    // output = input * output

    const [width, setWidth] = useState(0)
    const [Legend, setLength] = useState(0)
    const [area, setarea] = useState(0)

   return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>คำนวนพื้นที่สี่เหลียม</Text>
            <Button  title="กลับหน้า 1"/>
            
            <TextInput 
            style={styles.TextInput} 
            placeholder="กรอกความกว้าง"
            value={width.toString()}
            onChange={(w) => setWidth(Number(w))}
            />
            <TextInput style={styles.TextInput} placeholder="กรอกความยาว"/>
        
            <Button title="คำนวน" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"",
        justifyContent:"center",
        alignItems:"center",
        gap: 20,
    },

    mainTitle:{
        fontSize:20,
        fontWeight:"100",
    },

    TextInput:{
        borderEndWidth: 1,
        width: "80%",
        
    },
})