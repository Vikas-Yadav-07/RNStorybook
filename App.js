import React from 'react'
import {
  SafeAreaView,
  Text,
} from 'react-native';
import Config from 'react-native-config';
import StorybookUI from './storybook'
import TestComponent from './src/components/TestComponent/TestComponent';

const App = () => {
  return (
    <SafeAreaView>
     <Text>Hello Cruel World</Text>
     <TestComponent text={"Hellowo"} color ={"blue"}/>
    </SafeAreaView>
  );
};

export default StorybookUI 
