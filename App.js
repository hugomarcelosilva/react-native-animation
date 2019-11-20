import React, { Component } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f00',
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballY: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.ballY, {
      toValue: 500,
      duration: 1000,
    });
  }

  render() {
    return (
      <View styles={styles.container}>
        <Animated.View
          styles={[styles.ball, { top: this.state.ballY }]}
        ></Animated.View>
      </View>
    );
  }
}
