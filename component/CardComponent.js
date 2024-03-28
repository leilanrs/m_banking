import { useState } from "react"
import { Image, Text, StyleSheet, TouchableOpacity, View } from "react-native"

const CardComponent= ({balance, accountNo, poin})=>{
    const [isShow, setIsShow]= useState(false)
    return(
        <View style={styles.container}>
            <View style={[styles.horizontal, styles.spacer]}>
                <Text style={styles.textWhite}>Taplus Pegawai BNI</Text>
                <Image source={require('../assets/src/ic_arrow_down.png')} />
            </View>

            <View style={styles.horizontal}>
                <Text style={styles.textWhite}>{isShow ? 'Rp ' + balance : '*** *** ***'} </Text>
                <TouchableOpacity onPress={() => setIsShow(!isShow)}>
                    <Image source={require('../assets/src/ic_eye.png')} />
                </TouchableOpacity>
            </View>

            <View style={[styles.horizontal, styles.spacer]}>
                <View style={styles.horizontal}>
                    <Text style={styles.textWhite}>{accountNo}</Text>
                    <Image source={require('../assets/src/ic_copy.png')} />
                </View>
                <View style={[styles.horizontal, styles.badge]}>
                    <Image source={require('../assets/src/logo_poin.png')} />
                    <Text style={styles.textOrange}>{poin}</Text>
                    <Image source={require('../assets/src/ic_arrow_right.png')} />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop:10,
        width: '100%',
        padding:15,     
        backgroundColor:'#FF6600',
        borderRadius:20,
    },
    textWhite:{
        color:'white'
    },
    textOrange: {
        color: '#FF6600'
    },
    horizontal:{
        flexDirection:'row',
        marginBottom: 2,
        alignItems:'center'
    },
    spacer:{
        justifyContent:'space-between'
    },
    badge: {
        alignItems: 'center',
        backgroundColor: '#FFE0CD',
        borderRadius: 50,
        padding: 5,
    },

})

export default CardComponent