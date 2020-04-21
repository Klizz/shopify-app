import { connect } from "react-redux";
import Products from "../components/Products";

import { shopifystoreOperations } from "../store/shopifystore";
import { variantOperations } from "../store/variant";

const mapStateToProps = state => ({
  variant_is_loading: state.variant.variant_is_loading,
  variants: state.variant.variants
});

const mapDispatchToProps = dispatch => ({
  getShopifyData: () => dispatch(shopifystoreOperations.getShopifyData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);