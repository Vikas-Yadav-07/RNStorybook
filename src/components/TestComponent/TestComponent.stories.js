import React from 'react';
import {storiesOf} from '@storybook/react-native';
import TestComponent from './TestComponent';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('Test Component', module)
.addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
.add('Blue Button', () => <TestComponent color={"blue"} text={"Blue Button"} />)
.add('Brown Button', () => <TestComponent color={"brown"} text={"Brown Button"} />)

