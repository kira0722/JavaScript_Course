let bookCart = []

const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

function performCartActions(action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook)
            
            break;

        case REMOVE_FROM_CART_ACTION:
            if(bookCart.length === 0){
                console.log('Cart is empty, there arent books to remove');
            }else {
                const removedBook = bookCart.pop()
                console.log(`removed book from the cart: ${removedBook}`);
            }
            break;

        case VIEW_CART_ACTION:
            console.log(`this are the books available: ${bookCart}`);
            break;
    
        default:
            console.log('Invalid Option, select a valid option');
            break;
    }
}

performCartActions(ADD_TO_CART_ACTION, 'car')
performCartActions(ADD_TO_CART_ACTION, 'carlos')
performCartActions(ADD_TO_CART_ACTION, 'carlosssss')
performCartActions(REMOVE_FROM_CART_ACTION)
performCartActions(VIEW_CART_ACTION)