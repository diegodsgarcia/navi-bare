import { registerRootComponent } from 'expo'
import messaging from '@react-native-firebase/messaging'

import App from './src/App'

messaging().setBackgroundMessageHandler(async () => {
  console.log('Ta acontecendo alguma coisa em background')
})

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
