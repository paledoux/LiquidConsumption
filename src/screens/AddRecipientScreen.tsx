import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Button from "../components/Button";
import Box from "../components/Box";
import Text from "../components/Text";

interface AddRecipientScreenProps {}

const AddRecipientScreen = ({}: AddRecipientScreenProps) => {
  const [image, setImage] = useState();

  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  console.log(status);
  const pickImage = async () => {
    if (status.status !== ImagePicker.PermissionStatus.GRANTED) {
      const permision = await requestPermission();

      console.log("permision", permision);
    } else {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });

      //   if (!result.cancelled) {
      //   setImage(result.base64);
      //   }

      console.log("result", result);
    }
  };

  return (
    <Box marginTop="xxl">
      <Button onPress={() => pickImage()}>
        <Text>Click to take a picture</Text>
      </Button>
    </Box>
  );
};

export default AddRecipientScreen;
