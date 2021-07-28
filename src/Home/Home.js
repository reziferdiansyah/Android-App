import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Text
} from "react-native";

class App extends Component {
  state = {
    views: []
  };

  UNSAFE_componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
    // LayoutAnimation.configureNext({
    //   duration: 5000,
    //   update: { type: "spring" }
    // });
  }

  _onPressAddView = () => {
    this.setState(state => ({ views: [...state.views, {}] }));
  };

  _onPressRemoveView = () => {
    this.setState(state => ({ views: state.views.slice(0, -1) }));
  };

  render() {
    const views = this.state.views.map((view, i) => (
      <View key={i} style={styles.view}>
        <Text>{i}</Text>
      </View>
    ));
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressAddView}>
          <View style={styles.button}>
            <Text>Add view</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressRemoveView}>
          <View style={styles.button}>
            <Text>Remove view</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.viewContainer}>{views}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#eeeeee",
    padding: 10,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16
  },
  viewContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  view: {
    height: 54,
    width: 54,
    backgroundColor: "red",
    margin: 8,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;