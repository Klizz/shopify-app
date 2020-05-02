//acciones con axios async
//usamos thunk

import axios from "axios";
import Creators from "./actions";

import shopifyCreators from "../shopifystore/actions";

const setVariants = Creators.setVariants;
const solveVariant = Creators.solveVariant;
const closeModal = Creators.closeModal;
const stepVariant = Creators.stepVariant;
const _shopExists = shopifyCreators.shopExists;

// A ===================
//funciones que uso internamente en este archivo
//pero que el componente no necesita ejecutar
const _saveShopifyData = Creators.saveShopifyData;

// B ===================
//fuciones que se conectan con apis
//async usan thunk
const reviewVariants = payload => {
  return (dispatch, getState) => {
    const { shop } = getState().shopify;

    axios.post(`/store/${shop.id}/review_variants`, payload).then(
      response => {
        dispatch(setVariants(response.data.store.variants));
        dispatch(_shopExists(response.data.store));

        console.log("reviewVariants success", response);
      },
      error => {
        console.log("reviewVariants error", error);
      }
    );
  };
};

const updateVariantSelections = () => {
  return (dispatch, getState) => {
    const { variants_with_conflict } = getState().variant;
    const { shop } = getState().shopify;

    const shopify_variants = variants_with_conflict.map(e => {
      return {
        id: e.variant_id,
        price:
          e.price_selected === "recommended"
            ? e.variant_recommended_price
            : e.variant_price
      };
    });

    const instance = axios.create({
      baseURL: "/api",
      timeout: 5000
    });

    return instance.put("/shopify", { shopify_variants }).then(
      response => {
        console.debug("updateVariantSelections success", response);

        const backendVariants = variants_with_conflict.map(e => {
          return {
            _id: e._id,
            price_selected: e.price_selected
          };
        });

        axios
          .put(`/store/${shop.id}/finish`, {
            variants_with_conflict: backendVariants
          })
          .then(
            response => {
              //Guardando nuevos status en redux
              dispatch(_shopExists(response.data.store));
              dispatch(setVariants(response.data.store.variants));
              dispatch(closeModal());
            },
            error => {}
          );
      },
      error => {
        console.debug("updateVariantSelections error", error);
      }
    );
  };
};

// C ===================
//exportar las funciones que finalmente se van a comunicar
//con los componentes reales es decir tienen comunicacion
//con el exterior
export default {
  reviewVariants,
  solveVariant,
  closeModal,
  stepVariant,
  updateVariantSelections
};
