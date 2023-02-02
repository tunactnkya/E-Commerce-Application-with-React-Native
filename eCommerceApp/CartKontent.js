import React, { createContext, useState } from "react";
import { getProduct } from "./services/ProductServices";

export const CardKontext = createContext();


export function CartProvider(props) {

    const [items, setItems] = useState([])

    function addItemToCart(id) {
        const product = getProduct(id)
        setItems((prevItems) => {
            const item = prevItems.find((item) => (item.id == id))
            if (!item) {
                return [...prevItems, {
                    id,
                    qty,
                    product,
                    totalPrice: product.price
                }]
            } else {
                return prevItems.map((item) => {
                    if (item.id == id) {
                        item.qty++;
                        item.totalPrice += product.price;
                    }
                    return item;
                })
            }
        })

    }

    function getItemsCount() {
        return items.reduce((sum, item) => (sum + item.qty), 0)
    }

    function getTotalPrice() {
        return items.reduce((sum, item) => (sum + item.totalPrice), 0)
    }

    return (
        <CardKontext.Provider value={{ items, getItemToCart, getTotalPrice }}>
            {props.children}
        </CardKontext.Provider>
    )

}