import test from './/assets/test.jpg'

const PRODUCTS = [
    {
        id: "1",
        title: "a",
        price: 1.00,
        productImage: test,
    },
    {
        id: "2",
        title: "b",
        price: 2.00,
        productImage: test,
    },
    {
        id: "3",
        title: "c",
        price: 3.00,
        productImage: test,
    }
];

function getProductData(id) {
    let productData = PRODUCTS.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID:" + id);
        //just a check :)
        return undefined;
    }

    return productData;
}

export { PRODUCTS, getProductData };