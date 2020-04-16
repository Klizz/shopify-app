import types from "./types";

const saveShopifyData = shop => {
  return {
    type: types.SAVE_SHOPIFY_DATA,
    shop
  };
};

const shopExists = data_store => {
  return {
    type: types.SHOP_EXISTS,
    shop
  };
};

const shopNotExists = shop => {
  return {
    type: types.SHOP_NOT_EXISTS,
    shop
  };
};

const isLoading = shop => {
  return {
    type: types.SHOP_IS_LOADING,
    shop
  };
};

const isNotLoading = shop => {
  return {
    type: types.SHOP_IS_NOT_LOADING,
    shop
  };
};

const setError = shop => {
  return {
    type: types.SET_ERROR,
    shop
  };
};

const clearError = error => {
  return {
    type: types.CLEAR_ERROR,
    shop
  };
};

export default {
  saveShopifyData
};
