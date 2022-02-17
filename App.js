import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import {
  TransitionContainer,
  TransitionLayer,
  TransitionElement,
} from "react-native-transition-view";

import Layer1 from "./Layers/layer1";
import Layer2 from "./Layers/layer2";

export default function App() {
  return (
    <View style={styles.container}>
      <TransitionContainer
        layers={2}
        containerStyle={{ height: "100%" }}
        hiddenZindexDuration={700}
      >
        <TransitionLayer
          layerNumber={0}
          containerWidth={"100%"}
          containerStyle={{ height: "100%", backgroundColor: "transparent" }}
        >
          <Layer1 />
        </TransitionLayer>
        <TransitionLayer
          layerNumber={1}
          containerWidth={"100%"}
          containerStyle={{ height: "100%", backgroundColor: "transparent" }}
        >
          <Layer2 />
        </TransitionLayer>
      </TransitionContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});
