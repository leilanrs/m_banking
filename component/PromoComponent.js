import { Image, StyleSheet, Text, View } from "react-native"

const PromoComponent=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Promo & Informasi</Text>
            <Image style={styles.image} source={require('../assets/src/promo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        maxHeight:'80%',
        marginTop:20,
    },
    text: {
        color: "rgba(58, 53, 65, 0.68)",
        fontWeight:'bold',
        fontSize: 16,
        marginLeft: 20,
        marginBottom: 5
    },
    image:{
        height: '55%',
        width:'90%',
        alignSelf: 'center',
    }
})

export default PromoComponent