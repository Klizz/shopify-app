import { connect } from 'react-redux'
import Home from '../components/Home'

import { shopifystoreOperations } from '../store/shopifystore'
import {variantOperations} from '../store/variant'

const mapStateToProps = state=>({
    shop_is_loading: state.shopify.shop_is_loading,
    shop_exists: state.shopify.shop_exists,
    shop_status: state.shopify.shop_status,
})

const mapDispatchToProps = dispatch =>({
    getShopifyData: () => dispatch(shopifystoreOperations.getShopifyData())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)