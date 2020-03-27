import App from 'next/app'
import Head from 'next/head'
import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/styles.css'
import translations from '@shopify/polaris/locales/en.json'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'; 

class MyApp extends App {
    render(){
        const{ Component, pageProps } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <title>Karen App</title>
                    <meta charSet="utf-8" />
                </Head>
                <AppProvider>
                    <Component  {...pageProps} />
                </AppProvider>
            </React.Fragment>
        )
    }
}