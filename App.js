import * as React from 'react';
import { StyleSheet } from 'react-native'
import { BottomNavigation, Text , Provider as PaperProvider ,
   Appbar , TextInput , Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';


const HomeRoute = () => <Text style={{ color: 'white' }}>Home</Text>;

const MenuRoute = () => <Text style={{ color: 'white' }}> Menu</Text>;

const e_dealsRoute = () => <Text style={{ color: 'white' }}> e-Deals</Text>;

const SettingRoute = () => <Text style={{ color: 'white' }}> Settings</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'menu', title: 'Menu', icon: 'grid-large' },
    { key: 'e_deals', title: 'e-Deals', icon: 'coffee' },
    { key: 'setting', title: 'Settings', icon: 'cog' },
  ]);

  const [text, setText] = React.useState('');

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    menu: MenuRoute,
    e_deals: e_dealsRoute,
    setting : SettingRoute,
  });

  return (

    <PaperProvider>

    <Appbar.Header>
      <Appbar.Content title="FORM" titleStyle ={{ alignSelf: 'center' }}/>
    </Appbar.Header>

    <TextInput style = {styles.inputText}
      label="Name"
      value={text}
      onChangeText={text => setText(text)}
      mode = 'outlined'
    />

<TextInput style = {styles.inputText}
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
      mode = 'outlined'
    />

<TextInput style = {styles.inputText}
      label="Phone Number"
      value={text}
      onChangeText={text => setText(text)}
      mode = 'outlined'
    />

<TextInput style = {styles.inputText}
      label="Age"
      value={text}
      onChangeText={text => setText(text)}
      mode = 'outlined'
    />

  <Button style={styles.loginButton} mode="contained" onPress={() => console.log('Pressed')}>
    Success
  </Button>

    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting = {false}
      sceneAnimationEnabled = {false}
    />
    </PaperProvider>

  );
};

const styles = StyleSheet.create({
  loginTextSection: {
     width: '100%',
     height: '30%',
  },

  loginButtonSection: {
     width: '100%',
     height: '30%',
     justifyContent: 'center',
     alignItems: 'center'
  },

  inputText: {
     marginLeft: '7%',
     marginRight: '7%',
     height : 45,
  },

  loginButton: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop : '15%',
    backgroundColor: 'blue',
    height : 45,
    color: 'white'
  }
});

export default MyComponent;