import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Appointment from '../../screens/Appointment/index';
import AppointmentScreens, {AppointmentStackParamList} from './Appointment';

const Stack = createStackNavigator<AppointmentStackParamList>();

const options = {
  animationEnabled: true,
  headerShown: false,
};

function AppointmentStack() {
  return (
    <Stack.Navigator initialRouteName={AppointmentScreens.INDEX}>
      <Stack.Screen
        name={AppointmentScreens.INDEX}
        component={Appointment}
        options={options}
      />
    </Stack.Navigator>
  );
}
export default AppointmentStack;
