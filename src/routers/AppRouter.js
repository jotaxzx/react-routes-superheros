import React from 'react'
import { NavBar } from '../components/NavBar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { MarvelScreen } from '../components/MarvelScreen'
import { HeroeScreen } from '../components/HeroeScreen'
import { DcScreen } from '../components/DcScreen'

export const AppRouter = () => {
    return (
        <Router>

        <NavBar />   

      <div div className="container mt-4">

      <Switch>
                <Route exact path="/marvel" component={ MarvelScreen }/>
                <Route exact path="/hero/:heroeId" component={ HeroeScreen }/> { /* aqui se mostraran los 2 tipos de heroes, tanto de marvel como de dc por el publisher.*/} 
                <Route exact path="/dc" component={ DcScreen }/>

                <Redirect to="/marvel"/>




            </Switch>
      </div>
    </Router>
       

    )
}
