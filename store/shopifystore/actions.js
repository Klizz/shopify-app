//Acciones puras no async
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
    data_store: data_store
  };
};

const shopNotExists = () => {
  return {
    type: types.SHOP_NOT_EXISTS
  };
};

const isLoading = () => {
  return {
    type: types.SHOP_IS_LOADING
  };
};

const isNotLoading = () => {
  return {
    type: types.SHOP_IS_NOT_LOADING
  };
};

const setError = error => {
  return {
    type: types.SET_ERROR,
    error
  };
};

const clearError = () => {
  return {
    type: types.CLEAR_ERROR
  };
};

const updatePruebaTitulo = prueba_titulo => {
  return {
    type: types.UPDATE_PRUEBA_TITULO,
    prueba_titulo
  };
};

const updatePruebaNieto = prueba_nieto => {
  return {
    type: types.UPDATE_PRUEBA_NIETO,
    prueba_nieto
  };
};

export default {
  saveShopifyData,
  shopExists,
  shopNotExists,
  isLoading,
  isNotLoading,
  setError,
  clearError,

  updatePruebaTitulo,
  updatePruebaNieto
};
