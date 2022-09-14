import React from "react";
import Box from "../components/Box";
import Text from "../components/Text";

interface AddConsumptionScreenProps {}

const AddConsumptionScreen = ({}: AddConsumptionScreenProps) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text color="primary">Ecran Ajouter une consomation</Text>
    </Box>
  );
};

export default AddConsumptionScreen;
