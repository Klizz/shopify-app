import {
  Page,
  Layout,
  FooterHelp,
  Card,
  Button,
  Form,
  FormLayout,
  TextField
} from "@shopify/polaris";
import { TitleBar, ResourcePicker } from "@shopify/app-bridge-react";
import { useState, Component } from "react";

const Registro = () => {
  const [shop, setStore] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [card, setCard] = useState();

  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: "Hola soy un primary actions"
        }}
      />
      <Layout>
        <Card title="Registro" sectioned>
          <Form>
            <FormLayout>
              <TextField
                label="Nombre de la tienda"
                type="text"
                name="store"
                onChange={valor => {
                  setStore = valor;
                }}
              />
              <TextField
                label="Email"
                type="email"
                name="email"
                onChange={valor => {
                  setEmail = valor;
                }}
              />
              <TextField
                label="Nombre del representante legal"
                type="text"
                name="name"
                onChange={valor => {
                  setName = valor;
                }}
              />
              <TextField
                label="Tarjeta de credito"
                type="text"
                name="card"
                helpText="Opcional"
                onChange={valor => {
                  setCard = valor;
                }}
              />
              <TextField
                label="Telefono"
                type="tel"
                name="phone"
                onChange={valor => {
                  setPhone = valor;
                }}
              />
              <Button>Guardar</Button>
            </FormLayout>
          </Form>
        </Card>
      </Layout>
      <FooterHelp>Soy el footer</FooterHelp>
    </Page>
  );
};
export default Registro;
