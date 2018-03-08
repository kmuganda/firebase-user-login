import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App1 extends Component {
  state = { loggedIn: null };

  componentWillMount() {
      firebase.initializeApp({
      apiKey: 'AIzaSyDKxKqzxOEKkQeTqpcJ2UGzNnrAD98Oamk',
      authDomain: 'authentication1111.firebaseapp.com',
      databaseURL: 'https://authentication1111.firebaseio.com',
      projectId: 'authentication1111',
      storageBucket: 'authentication1111.appspot.com',
      messagingSenderId: '375635722329'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState ({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App1;
