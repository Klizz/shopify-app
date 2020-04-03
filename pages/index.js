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

const Index = () => {
  useEffect(() => {
    Axios.get('api/prueba')
    .then(res=>{
      console.log('res', res)
    }, err =>{
      console.log('err', err)
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
        <Link><a href="h4982">Home</a></Link>
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
