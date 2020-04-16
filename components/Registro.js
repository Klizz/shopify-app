import {
    Page,
    Form,
    FormLayout,
    TextField,
    Layout,
    Stack,
    Button
  } from "@shopify/polaris";
  import { useState } from "react";
  
  const Registro = ({
    shop_is_loading,
    shop_exists,
    shop,
    shop_error,

    createShop,
    clearError
  }) => {

    const [nombre, setNombre] = useState(shop.name);
    const [representante, setRepresentante] = useState(shop.shop_owner);
    const [telefono, setTelefono] = useState(shop.phone);
    const [email, setEmail] = useState(shop.customer_email);
    const [tarjeta, setTarjeta] = useState("");
  
    const [store, setStore] = useState({});
  
    const handleSubmit = () => {
      console.log(
        "Datos guardados",
        nombre,
        representante,
        telefono,
        email,
        tarjeta
      );
    };
  
    return (
      <Page fullWidth title={"Registro"}>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <Layout>
              <Layout.Section oneHalf>
                <TextField
                  value={nombre}
                  onChange={valor => setNombre(valor)}
                  label="Nombre de la tienda"
                  type="text"
                  fullWidth
                />
  
                <TextField
                  value={representante}
                  onChange={valor => setRepresentante(valor)}
                  label="Nombre del representante legal"
                  type="text"
                  fullWidth
                />
  
                <TextField
                  value={telefono}
                  onChange={valor => setTelefono(valor)}
                  label="Teléfono"
                  type="text"
                  fullWidth
                />
              </Layout.Section>
  
              <Layout.Section oneHalf>
                <TextField
                  value={email}
                  onChange={valor => setEmail(valor)}
                  label="Email"
                  type="text"
                  fullWidth
                />
  
                <TextField
                  value={tarjeta}
                  onChange={valor => setTarjeta(valor)}
                  label="Tarjeta de credito"
                  type="text"
                  fullWidth
                />
  
                <Stack distribution="trailing">
                  <Button primary submit>
                    Guardar
                  </Button>
                </Stack>
              </Layout.Section>
            </Layout>
          </FormLayout>
        </Form>
      </Page>
    );
  };
  
  export default Registro;
  