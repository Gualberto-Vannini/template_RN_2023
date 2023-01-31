import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import HomeStack from './Home/HomeStack';
import ReportStack from './Report/ReportStack';
import AppointmentStack from './Appointment/AppointmentStack';
import ProfileStack from './Profile/ProfileStack';

import HomeIcon from './Home/home.svg';
import ReportIcon from './Report/report.svg';
import AppointmentIcon from './Appointment/appointment.svg';
import ProfileIcon from './Profile/profile.svg';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {position: 'absolute'},
        tabBarActiveTintColor: '#119DA4',
        tabBarInactiveTintColor: '#C4C4C4',
      }}>
      <Tab.Screen
        name={'Home'}
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => <HomeIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name={'Report'}
        component={ReportStack}
        options={{
          tabBarIcon: ({color}) => <ReportIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name={'Appointment'}
        component={AppointmentStack}
        options={{
          tabBarIcon: ({color}) => <AppointmentIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileStack}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
