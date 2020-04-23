//import { TextStyle } from '@shopify/polaris'
import {
  TextStyle,
  Page,
  Layout,
  EmptyState,
  FooterHelp,
  Link,
  Card,
  Stack,
  Button,
  Subheading,
  Spinner
} from "@shopify/polaris";
import { TitleBar, ResourcePicker } from "@shopify/app-bridge-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

const Index = ({
  shop_is_loading,
  shop_exists,
  shop_status,
  getShopifyData,
  reviewVariants
}) => {
  //Se ejecuta 1 sola vez al montarse el componente
  useEffect(() => {
    getShopifyData();
  }, []);

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSelection = resources => {
    setOpen(false);

    let payload = [];

    resources.selection.forEach(product => {
      const {
        id: product_id,
        title: product_title,
        images,
        vendor
      } = product;

      const variants = product.variants.map(variant => {
        const {
          id: variant_id,
          title: variant_title,
          weight: variant_weight,
          weightUnit: variant_unit,
          price: variant_price
        } = variant;

        return {
          product_id,
          product_title,
          product_image: images.length > 0 ? images[0].originalSrc : undefined,
          vendor,

          variant_id,
          variant_title,
          variant_weight,
          variant_unit,
          variant_price,
          variant_recommended_price: 0,
          tax: 0,
          status: "Calculando"
        };
      });

      payload = [...payload, ...variants];
    });

    console.log("payload", payload);

    reviewVariants({ variants: payload });
    console.log(resources);
  };

  let accionBotones = <Spinner accessibilityLabel="Spinner example" size="large" color="teal" />

  if (shop_is_loading === false) {
    accionBotones = (
      <Card sectioned>
        <Button
          fullWidth={true}
          onClick={() => router.push("/registro")}
          disabled={shop_exists === true}
        >
          Registro
        </Button>
        <Button
          fullWidth={true}
          onClick={() => setOpen(true)}
          disabled={shop_exists === false || shop_status === "en_revision"}
        >
          Enviar productos a revisión
        </Button>
      </Card>
    );
  }

  return (
    <Page fullWidth>
      <a href="/otro_layout">Otro layout</a><br/>
      <a href="/products">products</a><br/>
      <a href="/registro">Registro</a><br/>

      <TitleBar
        primaryAction={{
          content: "Hola soy un primary"
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
        <Layout.Section>
          <Card title="Home" sectioned>
            <Stack>
              <p>
              Cosmic fugue permanence of the stars explorations hydrogen atoms a still more glorious dawn awaits bits of moving fluff? Circumnavigated the ash of stellar alchemy with pretty stories for which there's little good evidence radio telescope of brilliant syntheses shores of the cosmic ocean. Encyclopaedia galactica hearts of the stars hearts of the stars the only home we've ever known from which we spring the carbon in our apple pies
              </p>
              <p>
              The sky calls to us something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing ship of the imagination cosmos paroxysm of global death. Network of wormholes laws of physics laws of physics Cambrian explosion with pretty stories for which there's little good evidence with pretty stories for which there's little good evidence. Network of wormholes stirred by starlight star stuff harvesting star light vastness is bearable only through love with pretty stories for which there's little good evidence take root and flourish and billions upon billions upon billions upon billions upon billions upon billions upon billions.
              </p>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          {accionBotones}
        </Layout.Section>
      </Layout>

      <FooterHelp>
        <Link>Soy el footer</Link>
      </FooterHelp>
    </Page>
  );
};

export default Index;
