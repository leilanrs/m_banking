import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const SplashScreen= ({navigation})=>{
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    useEffect(()=>{
        setTimeout(() => {
            isUserLoggedIn ? navigation.navigate("Home") : navigation.navigate("SignIn")
        }, 3000);
    }, [])

    return(
        <TouchableOpacity onPress={() => { isUserLoggedIn ? navigation.navigate("Home") : navigation.navigate("SignIn") }} style={styles.contnr}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../assets/src/BNI_logo.png')}
                />
                <Text style={styles.tagline}>Melayani Negeri Kebanggaan Bangsa</Text>
                <View style={styles.spacer}></View>
                <Image
                    style={styles.ojkLogo}
                    source={require('../assets/src/Lps.png')}
                />
                <Text style={styles.footer}>PT Bank Negara Indonesia (Persero) Tbk. berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK) serta merupakan peserta penjaminan Lembaga Penjamin Simpanan (LPS)</Text>
                <Text style={styles.version}>v5.11.1</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contnr:{
        flex:1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tagline: {
        fontSize: 16,
        color: '#006599',
        fontWeight: 'bold'
    },
    spacer: {
        height: 150
    },
    image: {
        width: 180,
        height: 58,
        marginTop: 80,
        marginBottom: 10,
    },
    ojkLogo: {
        width: 500,
        height: 90,
        resizeMode: 'contain',
        marginBottom: 3,
        marginTop: 150
    },
    footer: {
        fontSize: 12,
        marginTop: 5,
        opacity: 0.6,
        textAlign: 'center',
        marginHorizontal: 40
    },
    version: {
        marginTop: 30,
        fontSize: 12,
        opacity: 0.6
    },
});


export default SplashScreen