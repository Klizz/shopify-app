import axios from "axios";
import Creators from "./actions";

import shopifyCreators from "../shopifystore/actions";

const setVariants = Creators.setVariants;
const solveVariant = Creators.solveVariant;
const closeModal = Creators.closeModal;
const stepVariant = Creators.stepVariant;
const _shopExists = shopifyCreators.shopExists;

const _saveShopifyData = Creators.saveShopifyData;

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
export default {
  reviewVariants,
  solveVariant,
  closeModal,
  stepVariant
};
