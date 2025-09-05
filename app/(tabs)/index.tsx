import { useAuth } from '@/lib/auth-context';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Sameer</Text>
      <Button
        mode="text"
        onPress={signOut}
        icon={'logout'}
        textColor="#fff"
        style={{
          padding: 12,
          backgroundColor: '#c60000',
          borderRadius: 6,
          marginTop: 20,
        }}
      >
        sign Out
      </Button>
    </View>
  );
}
