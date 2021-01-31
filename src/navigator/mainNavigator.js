import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps199031Navigator from '../features/Maps199031/navigator';
import Additem199030Navigator from '../features/Additem199030/navigator';
import Maps199026Navigator from '../features/Maps199026/navigator';
import UserProfile199022Navigator from '../features/UserProfile199022/navigator';
import Settings198985Navigator from '../features/Settings198985/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps199031: { screen: Maps199031Navigator },
Additem199030: { screen: Additem199030Navigator },
Maps199026: { screen: Maps199026Navigator },
UserProfile199022: { screen: UserProfile199022Navigator },
Settings198985: { screen: Settings198985Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
