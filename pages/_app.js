import App from 'next/app'
import Head from 'next/head'
import { AppProvider } from '@shopify/polaris'
import { Provider } from '@shopify/app-bridge-react'
import '@shopify/polaris/styles.css'
import translations from '@shopify/polaris/locales/en.json'
import Cookies from 'js-cookie'

const API_URL = 'http://localhost:3001/api/v1'

import axios from 'axios'
axios.defaults.baseURL = API_URL

// IMPORTAR UTILERIAS DE REDUX
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import reducer from '../store'
import { composeWithDevTools } from 'redux-devtools-extension'

// CONSTRUIR STORE
const middlewares = [thunk]
const makeStore = (initialState, options) => {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares))
    )
}

class MyApp extends App {
    render(){
        const { Component, pageProps } = this.props;
        const config = { 
            apiKey: API_KEY, 
            shopOrigin: Cookies.get('shopOrigin'), 
            forceRedirect: true
        }
        return (
            <React.Fragment>
                <Head>
                    <title>Shopify App</title>
                    <meta charSet="utf-8" />
                </Head>

                <Provider config={config}>
                    <ReduxProvider i18n={translations}>
                        <AppProvider>
                            <Component {...pageProps} />
                        </AppProvider>
                    </ReduxProvider>
                </Provider>
                            
            </React.Fragment>
        )

    }

}


export default MyApp