//acciones con axios async
//usamos thunk
import axios from "axios";
import Creators from "./actions";

//funciones que uso internamente en este archivo
//pero que el componente no necesita ejecutar
const _saveShopifyData = Creators.saveShopifyData;
const _shopExists = Creators.shopExists;
const _shopNotExists = Creators.shopNotExists;
const _shopIsLoading = Creators.shopIsLoading;
const _shopIsNotLoading = Creators.shopIsNotLoading;
const _setError = Creators.setError;
const _clearError = Creators.clearError;

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
            dispatch(_shopExists(response.data))
          },
          error => {
            dispatch(_shopNotExists())
          }
        );
      },
      error => {
        
      }
    );
  };
};

const createShop = (payload) => {
  return (dispatch) => {
    dispatch(_shopIsLoading())
    axios.post('/store', payload)
     .then(response => {
       dispatch(_shopExists(response.data))
     }, err => {
       dispatch(_shopNotExists())
       switch(err.response.status){
         case 400:
          dispatch(_setError("Error de validacion"))
           break;
         default:
          dispatch(_setError("Error de servidor"))
       }
     })
  }
}

//exportar las funciones que finalmente se van a comunicar
//con los componentes reales es decir tienen comunicacion
//con el exterior
export default {
  getShopifyData,
  createShop
};
