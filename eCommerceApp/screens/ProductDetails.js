import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button, SafeAreaView } from "react-native";
import { getProduct } from "../services/ProductServices";
import { CardKontext } from "../CartKontent";


function ProductDetails({ route }) {
    const { productId } = route.params;
    const { product, setProduct } = useState({});
    //const { addItemToCart } = useContext(CardKontext);



    function onAddToCart() {
        //addItemToCart{ product.id }
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.imageContainer} >
                    <Image style={styles.image} source={require("../assets/iphone.jpg")} />
                </View>
                <View style={styles.infoContainer} >
                    <Text style={styles.name}>iPhone 14 pro max</Text>
                    <Text style={styles.price}>$ 799</Text>
                    <Text style={styles.description}>6.7-inch Super Retina  XDR display with Promotion for a faster, more responsive feel Cinematic</Text>
                    <Button title="Add To Cart" onPress={onAddToCart} />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    infoContainer: {
        padding: 16
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16
    }
})


export default ProductDetails;