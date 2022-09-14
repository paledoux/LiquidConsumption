import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Box from "../components/Box";
import Button from "../components/Button";
import Text from "../components/Text";

interface AddConsumptionScreenProps {}

const AddConsumptionScreen = ({}: AddConsumptionScreenProps) => {
  return (
    <SafeAreaView>
      <Box alignItems="center">
        <Text color="primary">Ecran Ajouter une consomation</Text>
        <Box flexDirection="row" flexWrap="wrap">
          {CONTAINERS.map((container) => {
            return (
              <Box width="50%">
                <Button
                  key={container.id}
                  onPress={() => console.log(container.name)}
                >
                  <Text>{container.name}</Text>
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default AddConsumptionScreen;

const CONTAINERS: container[] = [
  {
    id: 1,
    name: "verre1",
  },
  {
    id: 2,
    name: "verre2",
  },
  {
    id: 3,
    name: "verre3",
  },
  {
    id: 4,
    name: "verre4",
  },
  {
    id: 5,
    name: "verre5",
  },
  {
    id: 6,
    name: "verre6",
  },
];

interface container {
  id: number;
  name: string;
  image?: string;
}
