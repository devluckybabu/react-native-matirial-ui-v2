import React from 'react';
import Container from './Container';
import MaterialUI from './UI';

const App = () => (
  <MaterialUI
    stack={{
      screens: [{
        name: 'home',
        screen: Container
      }, {
        name: 'About',
        screen: Container
      }]
    }}
    bottomTabs={{
      options: { headerShown: false },
      name: 'Hello World',
      screens: [{
        name: 'Home',
        screen: Container
      }, {
        name: 'hello',
        screen: Container
      }, {
        name: 'World',
        screen: Container
      }]
    }}
  />
)
export default App;