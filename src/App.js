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
  constructor() {
    super();
    this.state = {
      ballY: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.spring(this.state.ballY, {
      toValue: 300,
      bounciness: 20,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.ball, { top: this.state.ballY }]}
        ></Animated.View>
      </View>
    );
  }
}
