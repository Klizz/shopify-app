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
          store: '',
          email: '',
          name: '',
          card: '',
          phone: ''
        };
      }
      handleInput = (event) => {
        let storev = event.target.store;
        let emailv = event.target.email;
        let namev = event.target.name;
        let cardv = event.target.card;
        let phonev = event.target.phone;
        let val = event.target.value;
        this.setState({
            [storev]: val,
            [emailv]: val,
            [namev]: val,
            [cardv]: val,
            [phonev]: val
        });
      }

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
                  name="store"
                  onChange={this.handleInput}
                />
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  onChange={this.handleInput}
                />
                <TextField
                  label="Nombre del representante legal"
                  type="text"
                  name="name"
                  onChange={this.handleInput}
                />
                <TextField
                  label="Tarjeta de credito"
                  type="text"
                  name="card"
                  helpText="Opcional"
                  onChange={this.handleInput}
                />
                <TextField
                  label="Telefono"
                  type="tel"
                  name="phone"
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
