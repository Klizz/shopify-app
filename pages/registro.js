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
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCardChange = this.handleCardChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
      }

      handleStoreChange (e) {
        this.setState({ store: e.target.value });
      }
      handleEmailChange (e) {
        this.setState({ email: e.target.value });
      }
      handleNameChange (e) {
        this.setState({ name: e.target.value });
      }
      handleCardChange (e) {
        this.setState({ card: e.target.value });
      }
      handlePhoneChange (e) {
        this.setState({ phone: e.target.value });
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
                  onChange={this.handleStoreChange}
                />
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  onChange={this.handleEmailChange}
                />
                <TextField
                  label="Nombre del representante legal"
                  type="text"
                  name="name"
                  onChange={this.handleNameChange}
                />
                <TextField
                  label="Tarjeta de credito"
                  type="text"
                  name="card"
                  helpText="Opcional"
                  onChange={this.handleCardChange}
                />
                <TextField
                  label="Telefono"
                  type="tel"
                  name="phone"
                  onChange={this.handlePhoneChange}
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
