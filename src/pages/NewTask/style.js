import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    label:{
        width:"90%",
        marginTop:20,
        marginLeft:20,
        fontSize:16,
        color:"#F92E6a"
    },
    input:{
        width:"90%",
        marginTop:10,
        height:50,
        borderBottomWidth:1,
        borderBottomColor:"#F92E6A",
        marginRight:"auto",
        marginLeft:"auto"

    },
    buttonNewTask:{
        width: 60,
        heigth: 60,
        position: "absolute",
        bottom:30,
        left:20,
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        justifyContent:"center",
        alignItems: "center",
    },
    iconButton:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:"bold",
    },

})

export default styles