"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const bottom_tabs_1 = require("@react-navigation/bottom-tabs");
const BottmTab = (0, bottom_tabs_1.createBottomTabNavigator)();
const BottomTabs = (props) => {
    return (<BottmTab.Navigator screenOptions={props?.options}>
      {props?.screens?.map((item, index) => (<BottmTab.Screen name={item?.name} key={String(index)} options={item?.options} component={item?.screen}/>))}
    </BottmTab.Navigator>);
};
exports.default = BottomTabs;
