 //const apiKey = process.env.STRIPE_KEY;

const REACT_APP_KEY_ONE = process.env.REACT_APP_KEY_ONE;
const REACT_APP_KEY_TWO = process.env.REACT_APP_KEY_TWO;
const REACT_APP_KEY_THREE = process.env.REACT_APP_KEY_THREE;


const PRODUCTS = [
    {
        id: REACT_APP_KEY_ONE,
        title: "yellow cow",
        price: 1.00,
        image: 'yellow'
    },
    {
        id: REACT_APP_KEY_TWO,
        title: "heart cow",
        price: 2.00,
        image: 'love'
    },
    {
        id: REACT_APP_KEY_THREE,
        title: "bunny",
        price: 3.00,
        image: 'spiderman'
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