import { Text, View, Pressable } from "react-native";

import { TransitionElement } from "react-native-transition-view";

const Layer1 = ({ setVisibleLayer, getAnimatedStyles }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TransitionElement
        containerStyle={[
          { marginTop: 100, alignItems: "center" },
          getAnimatedStyles({
            transitionStyle: "fade",
            containerWidth: "100%",
          }),
        ]}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Layer 1</Text>
      </TransitionElement>
      <View style={{ width: "100%" }}>
        <TransitionElement
          containerStyle={[
            getAnimatedStyles({
              transitionStyle: "slide",
              containerWidth: "100%",
            }),
          ]}
        >
          <Pressable
            style={{
              height: 70,
              backgroundColor: "black",
              borderRadius: 10,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setVisibleLayer(1)}
          >
            <Text style={{ color: "white" }}>Switch to layer 2</Text>
          </Pressable>
        </TransitionElement>
      </View>
    </View>
  );
};

export default Layer1;
