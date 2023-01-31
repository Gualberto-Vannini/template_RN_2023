import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Report from '../../screens/Report/index';
import ReportScreens, {ReportStackParamList} from './Report';

const Stack = createStackNavigator<ReportStackParamList>();

const options = {
  animationEnabled: true,
  headerShown: false,
};

function ReportStack() {
  return (
    <Stack.Navigator initialRouteName={ReportScreens.INDEX}>
      <Stack.Screen
        name={ReportScreens.INDEX}
        component={Report}
        options={options}
      />
    </Stack.Navigator>
  );
}
export default ReportStack;
