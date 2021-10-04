import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      currentUser: null
    }
  }

  unsubFromAuth = null

  componentDidMount() {
    this.unsubFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        this.setState({
          currentUser: {
            id: userRef.id,
            ...userRef.data()
          }
        })
      } else {
        this.setState({currentUser: userAuth})
      }
    })
  }

  componentWillUnmount() {
    this.unsubFromAuth()
  }

  render() {
    return (
      <div className='main'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
