import {
    TextStyle,
    Page,
    Layout,
    EmptyState,
    FooterHelp,
    Link
  } from "@shopify/polaris";
  import { TitleBar, ResourcePicker } from "@shopify/app-bridge-react";
  import { useState, useEffect } from "react";
  import Axios from "axios";
  
  const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
  
  const Index = ({shop_is_loading,
     shop_exists,
     shop_status,
     getshopifyData}) => {

    useEffect(() => {
      const axiosMongo = axios.create({
        baseURL: 'http://localhost:3001/api/v1',
        timeout: 2000
      })
      axios.get('api/shopify')
      .then(response =>{
        console.log('Exitoso', response)
        axiosMongo.get(`/store/${response.data.shot.id}`)
          .then(response2 => {
            console.log('tienda existente', response2)
          }, error2 => {
            if(error2.response.status===400) {
              console.log('tienda no encontrada', error2)
            } else {
              console.log('error mongo', error2)
            }
          })
      }, error =>{
        console.log('Error', error)
      })
    }, [])
  
    const [open, setOpen] = useState(false);
  
    const handleSelection = resources => {
      setOpen(false);
      console.log(resources);
    };
    return (
      <Page>
          <Link><a href="otro_layout">Otro layout</a></Link>
          <Link><a href="home">Home</a></Link>
          <Link><a href="shopify">shopify</a></Link>
        <TitleBar
          primaryAction={{
            content: "Hola soy un primary actions"
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={open}
          onSelection={handleSelection}
          onCancel={() => setOpen(false)}
        />
  
        <Layout>
          <EmptyState
            heading="Soy un titulo"
            action={{
              content: "Click on me",
              onAction: () => setOpen(true)
            }}
            image={img}
          >
            <p>Selecciona productos</p>
          </EmptyState>
        </Layout>
  
        <FooterHelp>Soy el footer</FooterHelp>
      </Page>
    );
  };
  
  export default Index;
  