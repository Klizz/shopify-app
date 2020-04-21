import axios from "axios";
import Creators from "./actions";
import VariantCreators from "../variant/actions";

//funciones que uso internamente en este archivo
//pero que el componente no necesita ejecutar
const _saveShopifyData = Creators.saveShopifyData;
const _shopExists = Creators.shopExists;
const _shopNotExists = Creators.shopNotExists;
const _isLoading = Creators.isLoading;
const _isNotLoading = Creators.isNotLoading;
const _setError = Creators.setError;
const clearError = Creators.clearError;
const updatePruebaNieto = Creators.updatePruebaNieto;
const updatePruebaTitulo = Creators.updatePruebaTitulo;
const _setVariants = VariantCreators.setVariants;

//fuciones que se conectan con apis
//async usan thunk
const getShopifyData = () => {
  return dispatch => {
    const instanceShopify = axios.create({
      baseURL: "/api",
      timeout: 5000
    });

    return instanceShopify.get(`/shopify`).then(
      response => {
        const { shop } = response.data;
        dispatch(_saveShopifyData(shop));

        const { id } = shop;
        axios.get(`/store/${id}`).then(
          response => {
            dispatch(_shopExists(response.data));
            dispatch(_setVariants(response.data.variants));
          },
          error => {
            dispatch(_shopNotExists());
          }
        );
      },
      error => {}
    );
  };
};

const createShop = payload => {
  return dispatch => {
    dispatch(_isLoading());

    axios.post("/store", payload).then(
      response => {
        dispatch(_shopExists(response.data));
      },
      err => {
        dispatch(_shopNotExists());

        switch (err.response.status) {
          case 400:
            dispatch(_setError("Error de validacion, verifique sus datos"));
            break;
          default:
            dispatch(_setError("Error de servidor"));
        }
      }
    );
  };
};

//exportar las funciones
export default {
  getShopifyData,
  createShop,
  clearError,

  updatePruebaNieto,
  updatePruebaTitulo
};
