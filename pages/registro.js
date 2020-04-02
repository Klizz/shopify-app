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

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: "",
      email: "",
      name: "",
      card: "",
      phone: ""
    };
  }

  handleInput = e => {
    this.setState({
      store: e.target.value,
      email: e.target.value,
      name: e.target.value,
      card: e.target.value,
      phone: e.target.value
    });
  };

  /* handleSubmit = e => {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log(userData)
    this.setState({
        store: "",
        email: "",
        name: "",
        card: "",
        phone: ""
    });
  }; */

  render() {
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
                  onChange={this.handleInput}
                />
                <TextField
                  label="Email"
                  type="email"
                  onChange={this.handleInput}
                />
                <TextField
                  label="Nombre del representante legal"
                  type="text"
                  onChange={this.handleInput}
                />
                <TextField
                  label="Tarjeta de credito"
                  type="text"
                  helpText="Opcional"
                  onChange={this.handleInput}
                />
                <TextField
                  label="Telefono"
                  type="tel"
                  onChange={this.handleInput}
                  // handleChange={this.handleInput}
                />
                <Button action={this.handleSubmit}>Guardar</Button>
              </FormLayout>
            </Form>
          </Card>
        </Layout>
        <FooterHelp>Soy el footer</FooterHelp>
      </Page>
    );
  }
}
export default Registro;
