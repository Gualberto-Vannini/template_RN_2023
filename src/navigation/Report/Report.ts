import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum ReportScreens {
  INDEX = 'ReportScreen',
}

export type ReportStackParamList = {
  [ReportScreens.INDEX]: undefined;
};

export type ReportScreenProps<T extends ReportScreens> = {
  navigation: StackNavigationProp<ReportStackParamList, T>;
  route: RouteProp<ReportStackParamList, T>;
};

export default ReportScreens;
