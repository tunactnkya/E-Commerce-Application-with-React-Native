const PRODUCTS = [
    {
        id: 1,
        name: "Apple iPhone 14 Pro Max",
        price: 799,
        image: require("../assets/iphone.jpg"),
        description:
            "6.7-inch Super Retina  XDR display with Promotion for a faster, more responsive feel Cinematic"
    },
    {
        id: 2,
        name: "MSI GeForce RTX 4090 SUPRIM X 24G 24GB GDDR6X 384 Bit ",
        price: 999,
        image: require("../assets/ekran.jpg"),
        description:
            "6.7-inch Super Retina  XDR display with Promotion for a faster, more responsive feel Cinematic"
    },
    {
        id: 3,
        name: "Abra A5 V172 15.6 GAMİNG LAPTOP",
        price: 599,
        image: require("../assets/pc.jpg"),
        description:
            "6.7-inch Super Retina  XDR display with Promotion for a faster, more responsive feel Cinematic"
    },
]

export function getProducts() {
    return PRODUCTS;
}


export function getProduct(id) {
    return PRODUCTS.find((product) => product.id == id);
}