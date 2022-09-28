let initialState = {
    checkout: {
        cart: [],
        subTotal: 0
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'SET_Checkout':
            return {
                ...state, checkout: action.payload
            }
        
        default:
            return state;
    }
}