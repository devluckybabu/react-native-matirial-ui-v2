/// <reference types="react" />
import { StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { BottomTabOptions } from './types';
declare type screenOptions = {
    name: string;
    screen: any;
    options?: StackNavigationOptions;
};
declare type StackOptions = {
    options?: StackNavigationOptions;
    screens: screenOptions[];
};
interface MaterialUIProps {
    stack: StackOptions;
    bottomTabs?: BottomTabOptions;
}
declare const MaterialUI: ({ stack, bottomTabs }: MaterialUIProps) => JSX.Element;
export default MaterialUI;
