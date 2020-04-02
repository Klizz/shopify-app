import {
  Page,
  Layout,
  FooterHelp,
  Card,
  Button
} from "@shopify/polaris";
import { TitleBar, ResourcePicker } from "@shopify/app-bridge-react";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleSelection = resources => {
    setOpen(false);
    console.log(resources);
  };
  return (
    <Page>
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
        <Layout.Section>
          <Card title="Cosmos Ipsum" sectioned>
            <p>
              Extraordinary claims require extraordinary evidence descended from
              astronomers preserve and cherish that pale blue dot dream of the
              mind's eye worldlets radio telescope. The ash of stellar alchemy
              something incredible is waiting to be known are creatures of the
              cosmos network of wormholes encyclopaedia galactica a still more
              glorious dawn awaits. Encyclopaedia galactica laws of physics with
              pretty stories for which there's little good evidence not a
              sunrise but a galaxyrise vastness is bearable only through love
              dispassionate extraterrestrial observer.
              <br />
              Vanquish the impossible made in the interiors of collapsing stars
              rich in heavy atoms white dwarf corpus callosum emerged into
              consciousness. Concept of the number one citizens of distant
              epochs finite but unbounded are creatures of the cosmos Sea of
              Tranquility citizens of distant epochs. A still more glorious dawn
              awaits extraordinary claims require extraordinary evidence stirred
              by starlight something incredible is waiting to be known as a
              patch of light not a sunrise but a galaxyrise and billions upon
              billions upon billions upon billions upon billions upon billions
              upon billions.
            </p>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card title="Tags" sectioned>
          <a href="registro">
            <Button
            fullWidth={true} 
            onClick={console.log("Hiciste click en registro")}
            >
            Registrarse
            </Button></a>
            <Button
            fullWidth={true} 
            onClick={ () => setOpen=(true) }
            >
              Enviar productos a revision
            </Button>
          </Card>
        </Layout.Section>
      </Layout>

      <FooterHelp>Soy el footer</FooterHelp>
    </Page>
  );
};

export default Home;