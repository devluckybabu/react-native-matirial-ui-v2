import { RouteProp, ParamListBase } from '@react-navigation/native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StackNavigationOptions } from '@react-navigation/stack';
declare type screenOptions = {
    name: string;
    screen: any;
    options?: BottomTabNavigationOptions;
};
declare type BottomTabOptions = {
    name?: string;
    navigation?: any;
    screens: screenOptions[];
    stackOptions?: StackNavigationOptions;
    options?: BottomTabNavigationOptions;
    route?: RouteProp<ParamListBase, string>;
};
export { BottomTabOptions, screenOptions };
