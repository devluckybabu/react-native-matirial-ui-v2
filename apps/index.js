"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const native_1 = require("@react-navigation/native");
const stack_1 = require("@react-navigation/stack");
const BottomTabs_1 = __importDefault(require("./components/BottomTabs"));
const Stack = (0, stack_1.createStackNavigator)();
;
const MaterialUI = ({ stack, bottomTabs }) => {
    const { height } = (0, react_native_1.useWindowDimensions)();
    return (<react_native_1.View style={{ height: height - 2, position: 'relative' }}>
      <native_1.NavigationContainer>
        <Stack.Navigator screenOptions={stack?.options}>
          {bottomTabs ? (<Stack.Screen name={bottomTabs?.name || "bottom_tab"} options={bottomTabs?.stackOptions}>
              {({ route, navigation }) => (<BottomTabs_1.default route={route} navigation={navigation} options={bottomTabs?.options} screens={bottomTabs?.screens}/>)}
            </Stack.Screen>) : null}
          {stack?.screens?.map((item, index) => (<Stack.Screen key={String(index)} name={item?.name} options={item?.options} component={item?.screen}/>))}
        </Stack.Navigator>
      </native_1.NavigationContainer>
    </react_native_1.View>);
};
exports.default = MaterialUI;
