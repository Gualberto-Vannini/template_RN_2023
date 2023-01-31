import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum AppointmentScreens {
  INDEX = 'AppointmentScreen',
}

export type AppointmentStackParamList = {
  [AppointmentScreens.INDEX]: undefined;
};

export type AppointmentScreenProps<T extends AppointmentScreens> = {
  navigation: StackNavigationProp<AppointmentStackParamList, T>;
  route: RouteProp<AppointmentStackParamList, T>;
};

export default AppointmentScreens;
