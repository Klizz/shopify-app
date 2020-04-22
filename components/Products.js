import {
  Page,
  FooterHelp,
  Link,
  ResourceList,
  ResourceItem,
  Avatar,
  Card
} from "@shopify/polaris";

import { useEffect } from "react";
import ResolveConflict from '../containers/ResolveConflict'

const Products = ({
  getShopifyData,

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
      product_image: image_url,
      final_price = 0,
      status,
      final_duty = 0
    } = item;

    let columnA = null
    let columnB = null
    let statusColor = null

    switch(status) {
        case 'Calculando':
            statusColor = 'attention';
            break;
        case 'Sin conflicto' :
        case 'Completo':
            statusColor = 'success';
            columnA = `$${final_price} Subtotal`
            columnB = `$${final_duty} Impuestos`
    }


    const media = <Avatar customer size="medium" source={image_url} />;

    return <ResourceItem id={id} media={media}></ResourceItem>;
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

      <FooterHelp>Soy el footer</FooterHelp>
    </Page>
  );
};

export default Products;
