import types from './types'
const saveShopifyData = (shop) => {
    return {
        type: types.SAVE_SHOPIFY_DATA,
        shop: shop
    }
}

export default {
    saveShopifyData,
}

saveShopifyData({ name: 'tienda' })