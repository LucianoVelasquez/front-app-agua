import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import { HomeIcon, SettingsIcon,Search } from "lucide-react-native";
import Medidores from "../pages/medidores";

const Tab = createBottomTabNavigator();

export function NavigationTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor: "black" }}
      initialRouteName="Home"
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <HomeIcon color={color} />
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{ headerShown: false,tabBarIcon: ({ color, size }) => {
          return <Search color={color} />
        }, }}
        name="Medidores"
        component={Medidores}
      />
    </Tab.Navigator>
  );
}
