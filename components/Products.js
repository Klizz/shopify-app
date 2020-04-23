import {
  Page,
  FooterHelp,
  Link,
  ResourceList,
  ResourceItem,
  Avatar,
  Card,
  Stack,
  Badge,
  TextStyle,
  Button
} from "@shopify/polaris";

import { useEffect } from "react";
import ResolveConflict from "../containers/ResolveConflict";

const Products = ({
  getShopifyData,
  solveVariant,

  variant_is_loading,
  variants
}) => {
  //Se ejecuta 1 sola vez al montarse el componente
  useEffect(() => {
    getShopifyData();
  }, []);

  const resourceName = {
    singular: "variant",
    plural: "variants"
  };

  const renderItem = item => {
    const {
      _id: id,
      product_title: title,
      variant_title,
      product_image: image_url,
      final_price = 0,
      status,
      tax_calculated: final_duty
    } = item;

    let columnA = null;
    let columnB = null;
    let statusColor = null;

    switch (status) {
      case "Calculando":
        statusColor = "attention";
        break;
      case "Sin conflicto":
      case "Completo":
        statusColor = "success";
        columnA = `$${final_price} Subtotal`;
        columnB = `$${final_duty} Impuestos`;
        break;
      case "Conflicto":
        statusColor: "warning";
        columnA = (
          <Button size="slim" onClick={() => solveVariant(id)}>
            Resolver
          </Button>
        );
        break;
    }

    const media = <Avatar customer size="medium" source={image_url} />;

    return (
      <ResourceItem id={id} media={media}>
        <Stack>
          <Stack.Item fill>
            <h3>
              <TextStyle variation="strong">
                {title} - {variant_title}
              </TextStyle>
            </h3>
          </Stack.Item>
          <Stack.Item>{columnA}</Stack.Item>
          <Stack.Item>{columnB}</Stack.Item>
          <Stack.Item>
            <Badge status={statusColor}>{status}</Badge>
          </Stack.Item>
        </Stack>
      </ResourceItem>
    );
  };

  return (
    <Page fullWidth>
      <Card>
        <ResourceList
          resourceName={resourceName}
          items={variants}
          showHeader={false}
          loading={variant_is_loading}
          renderItem={renderItem}
        />
      </Card>
      <ResolveConflict />

      <FooterHelp>Soy el footer</FooterHelp>
    </Page>
  );
};

export default Products;
