import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link, hashHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/a.css';
import logo from './logo.png';

class Home extends Component {
    render() {
      console.log('home')
        // TODO traer las funciones de carga de datos aqui para que no cargue doble o triple xd ycarge una sola vez
        return (
            <hashHistory basename="/react-arframe">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={logo} className="img-fluid" />
                        </div>
                    </div>
                    <div className="row" className="mb-2">
                        <div className="col text-center">
                            <Button component={Link} className="btn btn-primary btn-lg btn-block" to="/arlocation">AR</Button>
                        </div>
                    </div>
                    <div className="row" className="mb-2">
                        <div className="col text-center">
                            <Button component={Link} className="btn btn-primary btn-lg btn-block" to="/maplocation">Mapa</Button>
                        </div>
                    </div>
                </div>
            </hashHistory>
        )
    }
}

export default Home;