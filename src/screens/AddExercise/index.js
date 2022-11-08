import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

const AddExercise = () => {
  return (
    <SafeAreaView>
      <Text>
        Add Exercise
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(AddExercise);
