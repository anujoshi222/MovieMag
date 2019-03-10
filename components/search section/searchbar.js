import React, { Component } from 'react'
import { Animated, Dimensions, Keyboard, StyleSheet, TextInput, UIManager ,View} from 'react-native';
const { State: TextInputState } = TextInput;
letkeyboardHeight = new Animated.Value(0);

export default class Searchbar extends Component {
    
    state = {
        shift: new Animated.Value(0),
      };
    
    componentWillMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
      }
    
      componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
      }
    
      handleKeyboardDidShow = (event) => {
        const { height: windowHeight } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInputState.currentlyFocusedField();
        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
          const fieldHeight = height;
          const fieldTop = pageY;
          const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
          if (gap >= 0) {
            return;
          }
          Animated.timing(
            this.state.shift,
            {
              toValue: gap,
              duration: 1000,
              useNativeDriver: true,
            }
          ).start();
        });
      }
    
      handleKeyboardDidHide = () => {
        Animated.timing(
          this.state.shift,
          {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }
        ).start();
      }
    

    render() {
        const { shift } = this.state;

        return(
            <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>

            <View style={styles.container}>
                <TextInput 
                    style={styles.search}
                    placeholder = 'Type here....'
                    placeholderTextColor = '#000'
                    onSubmitEditing={Keyboard.dismiss}
                    onEndEditing={this.props.onSubmit}
                    onChangeText={this.props.onChangeText}
                />
            </View>
            </Animated.View>

        );
    }

    
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        width: '100%',
        height: 50,
        backgroundColor: '#b0cde5',
        marginTop: 5,
        marginBottom:20,
        borderRadius: 25,
        paddingLeft: 20,
    }
})

