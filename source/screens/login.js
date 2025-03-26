import {StyleSheet, Text, View, Image, TextInput, ImageBackground, Button} from "react-native"

export function Login () {
    return(
    <View style={styles.login}>
        <View style={styles.box}>
            <View>
                <Text style={styles.text}>LOGIN DA ZÉCAFLIX</Text>
            </View>
            <View style={styles.input}>
                <TextInput style={styles.input2} placeholder='Digite seu nome aqui: '/>
                <TextInput style={styles.input2} placeholder='Digite sua idade aqui: '/>
            </View>
            <View style={styles.button}>
                <Button title="LOGIN" color="#000000"/>
            </View>
        </View>  
    </View>
    
);
}

const styles = StyleSheet.create({
login: {
    flex: 1,
    backgroundColor: '#D4D4D4',
    fontSize: 20,
},
text: {
    flex: 1,
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
},
input:{
    justifyContent: "center",
    borderCurve: "circular",
    alignItems: "center",
},
input2: {
    height: 40,
    width: 400,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
    borderCurve: "circular",
    alignItems: "center"
},
button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
},
box: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",    
}
})