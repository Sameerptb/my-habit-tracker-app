import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#c60000',
        tabBarStyle: {
          justifyContent: 'center',
          backgroundColor: 'white',
          bottom: 30,
          height: 70,
          borderRadius: 50,
          marginHorizontal: 50,

          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <FontAwesome5 name="home" size={24} color={color} />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            );
          },
        }}
      />
      <Tabs.Screen name="login" options={{ title: 'Login' }} />
    </Tabs>
  );
}
