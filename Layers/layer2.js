import { Text, View, Pressable } from "react-native";

import { TransitionElement } from "react-native-transition-view";

const Layer2 = ({ setVisibleLayer, getAnimatedStyles }) => {
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
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Layer 2</Text>
      </TransitionElement>
      <View style={{ width: "100%", alignItems: "flex-end" }}>
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
              backgroundColor: "lightblue",
              borderRadius: 10,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setVisibleLayer(0)}
          >
            <Text style={{ color: "white" }}>Switch to layer 1</Text>
          </Pressable>
        </TransitionElement>
      </View>
    </View>
  );
};

export default Layer2;
