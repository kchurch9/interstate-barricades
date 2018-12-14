import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Sidenav from './Sidenav'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
        <Sidenav/>
        <Footer/>
      </div>
    )
  }
}
