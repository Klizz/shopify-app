import types from './types'
import actions from './actions'

const INITIAL_STATE = {
    shop: null,
    shop_exists: false,
    shop_is_loading:  true,
    shop_error: null,
    shop_status: null
}

const shopifystoreReducer = ( state = INITIAL_STATE, action ) => {
    switch(actions.type) {
        case types.SAVE_SHOPIFY_DATA: {
            const { type, shop } = action
            return {
                ...state,
                shop: shop
            }
        }
        default: return state;
    }
}

export default shopifystoreReducer;