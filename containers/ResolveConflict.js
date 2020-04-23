import {
  TextContainer,
  Modal,
  Stack,
  Thumbnail,
  Card,
  Button
} from "@shopify/polaris";
import { useEffect } from "react";

const ResolveConflict = ({
  variant_in_modal,
  can_solve,
  modal_open,

  closeModal
}) => {
  const [hasPaginator, setHasPaginator] = useState({
    hasNext: false,
    hasPrevious: false,
    price_selected: null
  });
  useEffect(() => {
      const v = variants_with_conflict
      let p = { hasNext: false, hasPrevious: false, price_selected }
      if(v.length < 1) return setHasPaginator(p)
      const i = v.findIndex(element => element.id === id)
      if(i > 0) p.hasPrevious = true
      if(i > v.length - 1) p.hasNext = true
      setHasPaginator(p)
  }, [])
  const {
    id,
    product_image: image_url,
    product_title: title,
    variant_price: price,
    variant_recommended_price: recommended_price,
    tax_calculated: calculated_duty = 0,
    calculated_duty_original = 0
    // price_selected
  } = variant_in_modal;

  let pagination = null;
  if (variants_with_conflict.length > 0) {
    pagination = (
      <Pagination
        hasPrevious={true}
        onPrevious={() => {
          console.log("Previous");
        }}
        hsaNext={true}
        onNext={() => {
          console.log("Next");
        }}
      />
    );
  }

  const footer = (
    <Stack>
      <Stack.Item>paginador</Stack.Item>
      <Stack.Item>
        <Button primary onClick={handleSubmit} disabled={!can_solve}>
          Guardar seleccion
        </Button>
      </Stack.Item>
    </Stack>
  );

  const handleSubmit = () => {};

  const handleClose = () => {
    closeModal();
  };
  return (
    <Modal
      large
      open={modal_open}
      onClose={handleClose}
      title={"Resolver conflicto"}
    >
      <TextContainer>
        <div>Texto</div>
        <Stack distribution="fillEvenly">
          <Stack.Item>
            <Stack>
              <Thumbnail source={image_url} />
            </Stack>
          </Stack.Item>
        </Stack>
      </TextContainer>
    </Modal>
  );
};

export default ResolveConflict;
