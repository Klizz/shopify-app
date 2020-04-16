//acciones con axios async
//usamos thunk
import axios from "axios";
import Creators from "./actions";

//funciones que uso internamente en este archivo
//pero que el componente no necesita ejecutar
const _saveShopifyData = Creators.saveShopifyData;

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
            dispatch(_shotExists(response.data))
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

//exportar las funciones que finalmente se van a comunicar
//con los componentes reales es decir tienen comunicacion
//con el exterior
export default {
  getShopifyData
};
