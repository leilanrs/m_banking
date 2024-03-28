import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const data = [
    {
        id: 1,
        image: require('../assets/src/ic_transfer.png'),
        name: 'Transfer'
    },
    {
        id: 2,
        image: require('../assets/src/ic_wallet.png'),
        name: 'E-Wallet'
    }, 
    {
        id: 3,
        image: require('../assets/src/ic_pembayaran.png'),
        name: 'Pembayaran'
    },
    {
        id: 4,
        image: require('../assets/src/ic_pembelian.png'),
        name: 'Pembelian'
    },
    {
        id: 5,
        image: require('../assets/src/ic_investasi.png'),
        name: 'Investasi'
    },
    {
        id: 6,
        image: require('../assets/src/ic_Lifestyle.png'),
        name: 'Lifestyle'
    },
    {
        id: 7,
        image: require('../assets/src/ic_Lifegoals.png'),
        name: 'Life Goals'
    },
    {
        id: 8,
        image: require('../assets/src/ic_gaming.png'),
        name: 'Gaming'
    },
]

const MenuComponent=()=>{
    const sampleCallback= (callback)=>{
        console.log('nilai callback', callback)
    }
    const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={()=>{
                sampleCallback(item.name)
            }}>
            <View style={styles.contentContainer}>
                <Image style={[styles.item]} source={item.image}/>
                <Text style={styles.text}>{item.name}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                numColumns={4}
                keyExtractor={(item)=>item.id}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        paddingTop:5,
        backgroundColor: "#FFFFFF",
        width: "100%",
    },
    contentContainer: {
        paddingTop: 8,
        alignItems:'center',
        margin:'auto',
        width: 95,
        marginBottom: 5
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        width:60,
        height:60
    },
    text:{
        color: "rgba(58, 53, 65, 0.68)",
    }
})

export default MenuComponent