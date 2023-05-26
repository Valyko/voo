export default class Request {
    getProducts () {
        return fetch('https://voodoo-sandbox.myshopify.com/products.json?limit=12')
        .then((response) => {
            return response.json();
        })
    }
}