import types from "./types";

const INITAL_STATE = {
  shop: null,
  shop_exists: false,
  shop_is_loading: true,
  shop_error: null,
  shop_status: null
};

const shopifystoreReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case types.SAVE_SHOPIFY_DATA: {
      const { type, shop } = action;
      return {
        ...state,
        shop
      };
    }
    case types.SHOP_EXISTS: {
      return {
        ...state,
        shop_exists: true
      };
    }
    case types.SHOP_NOT_EXISTS: {
      return {
        ...state,
        shop_exists: false
      };
    }
    case types.SHOP_IS_LOADING: {
      return {
        ...state,
        shop_is_loading: true
      };
    }
    case types.SHOP_IS_NOT_LOADING: {
      return {
        ...state,
        shop_is_loading: false
      };
    }
    case types.SET_ERROR: {
      return {
        ...state,
        shop_error: true
      };
    }
    case types.CLEAR_ERROR: {
      return {
        ...state,
        shop_error: null
      };
    }
    default:
      return state;
  }
};

export default shopifystoreReducer;
