import axios from 'axios'
import Creators from './actions'

// Funciones que uso internamente en este archivo
// pero que el componente no necesita ejecutar
const _saveShopifyData = Creators.saveShopifyData

// Funciones que se conectan con apis async y usan thunk
const getShopifyData = () => {
    return(dispatch) => {
        const instanceShopify = axios.create({
            baseURL: '/api',
            timeout: 2000
        })
        return instanceShopify.get(`/shopify`)
            .then(response => {
                const { shop } = response.data
                dispatch(_saveShopifyData(shop))
                const { id } = shop
                axios.get(`/store/${id}`)
                    .then(response => {

                    }, error => {
                        
                    })
            }, error => {

            })
    }
}

// Exportar funciones que se comunican con los componentes

export default {
    getShopifyData
}