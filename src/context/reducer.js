export const initialState = {
    user: null,
    cart: []
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return{
                cart:[...state.cart, action.productInfo]
            }
        default:
            return state
    }
}

export default reducer;