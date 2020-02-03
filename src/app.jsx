 

// importing React and related dependencies
import React, { Component } from 'react';

// Importing CSS for the App.jsx file
import './app.css';

// Importing Components used in App.jsx
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Routes from './routes/routes';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
