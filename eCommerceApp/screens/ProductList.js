import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getProducts } from "../services/ProductServices";
import { Product } from "../components/Product";


export function ProductList({ navigation }) {


    function renderProduct({ item: product }) {
        return (
            <Product
                {...product}
                onPress={() => {
                    navigation.navigate('ProductDetails', { productId: product.id })
                }}
            />
        )
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts())
    })

    return (
        <FlatList
            style={styles.productList}
            contentContainerStyle={styles.productListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct}
        />
    )
}

const styles = StyleSheet.create({
    productList: {
        backgroundColor: '#eeeeee'
    },
    productListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginHorizontal: 8
    }
})