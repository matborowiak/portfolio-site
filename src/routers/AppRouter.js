import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import PortfolioItem from '../components/PortfolioItem'
import Contact from '../components/Contact'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/portfolio" component={Portfolio} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItem} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter