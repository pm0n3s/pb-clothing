import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {
  unsubFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        setCurrentUser({
          currentUser: {
            id: userRef.id,
            ...userRef.data()
          }
        })
      } else {
        setCurrentUser({currentUser: userAuth})
      }
    })
  }

  componentWillUnmount() {
    this.unsubFromAuth()
  }

  render() {
    return (
      <div className='main'>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
