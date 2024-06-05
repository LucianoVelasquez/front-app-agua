import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import Settings from "../pages/setting";
import { HomeIcon, SettingsIcon } from "lucide-react-native";

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
          return <SettingsIcon color={color} />
        }, }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}
