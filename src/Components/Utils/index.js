/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price);
    return sum;
    // return products.reduce((acc, product) => acc + product.price, 0);
}

export const dateTime = () => {
    var today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // var dateTime = date+' '+time;
    var dateTime = date;
        
    return dateTime;
}