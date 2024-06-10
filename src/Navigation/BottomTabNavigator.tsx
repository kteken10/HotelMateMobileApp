import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Reservation } from '../Screens/reservation/reservation'
import { MaterialIcons } from '@expo/vector-icons';
import { Buildings, Layer, ProfileCircle } from 'iconsax-react-native';
import { Notifications } from '../Screens/notification/notification';
import { colors } from '../theme';
import { Restaurant } from '../Screens/restaurant/restaurant';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Reservation"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary[700],
        tabBarStyle: {
          height: 55
        }

      }}
    >

      <Tab.Screen
        name="Reservation"
        component={Reservation}
        options={{
          headerShown: false,
          tabBarLabel: 'Reservation',
          tabBarLabelStyle: { width: 80 },
          tabBarIcon: ({ color, size }) => (
            <Buildings color={color} size={size} variant='Bulk' />
          ),
        }}
      />

      <Tab.Screen
        name="Services"
        component={Notifications}
        options={{
          headerShown: false,
          tabBarLabel: 'Services',
          tabBarLabelStyle: { width: 80 },
          tabBarIcon: ({ color }) => (
            <Layer color={color} size={32} variant='Bulk' />
          ),

        }}
      />

      <Tab.Screen
        name="Restaurant"
        component={Restaurant}
        options={{
          headerShown: false,
          tabBarLabel: 'Restaurant',
          tabBarLabelStyle: { width: 80 },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant-menu" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Notifications}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',

          tabBarLabelStyle: { width: 80 },
          tabBarIcon: ({ color }) => (
            <ProfileCircle color={color} size={32} variant='Bulk' />
          ),

        }}
      />
    </Tab.Navigator>
  );
}