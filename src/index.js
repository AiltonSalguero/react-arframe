import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter } from 'react-router-dom'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import 'react-mdl/extra/material.css';   
import 'react-mdl/extra/material.js';
import './App.css';


class App extends Component {
  render() {
    console.log('index');
    return (
      <BrowserRouter basename="/react-arframe">
        <div className="demo-big-content">
          <Layout>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#sceneContainer'));