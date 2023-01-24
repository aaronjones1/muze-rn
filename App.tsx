import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth0, Auth0Provider } from 'react-native-auth0';

const SignInButton = () => {
  const { authorize } = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title='Sign in' />;
};

export default function App() {
  return (
    <Auth0Provider
      domain={'dev-min73mnfgfs8ofzq.us.auth0.com'}
      clientId={'UZDwRiztDQdJ9wBW1PMXdf3otnq2bcDM'}
    >
      <View style={styles.container}>
        <Text>Muze</Text>
        <SignInButton />
        <StatusBar style='auto' />
      </View>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

