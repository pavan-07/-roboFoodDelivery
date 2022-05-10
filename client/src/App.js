import React from "react"
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './views/Dashboard'
import LandingPage from "./views/LandingPage";
import { BrowserRouter, Route } from 'react-router-dom';
import Register from "./views/Register";
import UserProfile from "./views/Profile/UserProfile";

import RestaurantRegister from './views/RestaurantResigter'
import RestaurantLogin from "./views/RestaurantLogin";
import RestaurantDashboard from "./views/Dashboards/RestaurantDashboard";
import RestaurantMenu from "./views/Restaurant/RestaurantMenu"
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import RestaurantView from "./views/Restaurant/RestaurantView";
import AddDish from './views/Dashboards/AddDish'
import CustomerDashboard from './views/Dashboards/CustomerDashboard'
import Favourites from './views/Restaurant/Favourites'
import CustomerOrder from './views/Orders/CustomerOrder'
import RestaurantOrder from './views/Orders/RestaurantOrder'
import RestaurantProfile from "./views/Profile/RestaurantProfile";
import CustomerCheckOut from "./views/Dashboards/CustomerCheckOut";
import AddressForm from "./views/Dashboards/AddressForm";
import RestaurantCustomerView from './views/Profile/RestaurantCustomerView'

const App = () => {
    return (
        <div>
            {/* <CssBaseline /> */}
            {/* <Login /> */}
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/LandingPage" component={LandingPage}></Route>
            <Route exact path="/Register" component={Register}></Route>
            <Route exact path="/RestaurantRegister" component={RestaurantRegister}></Route>
            <Route exact path="/RestaurantLogin" component={RestaurantLogin}></Route>
            
            <Route exact path="/UserProfile" component={UserProfile}></Route>
            <Route exact path="/RestaurantView" component={RestaurantView}></Route>
            <Route exact path="/RestaurantMenu" component={RestaurantMenu}></Route>
            <Route  path="/RestaurantDashboard" component={RestaurantDashboard}></Route>
            <Route path="/AddDish" component = {AddDish}></Route>
            <Route path="/CustomerDashboard" component = {CustomerDashboard}></Route>
            <Route path="/Favourites" component = {Favourites}></Route>
            <Route path="/CustomerOrder" component = {CustomerOrder}></Route>
            <Route path="/RestaurantOrder" component = {RestaurantOrder}></Route>
            <Route path="/RestaurantProfile" component = {RestaurantProfile}></Route>
            <Route path="/CustomerCheckOut" component = {CustomerCheckOut}></Route>
            <Route path="/AddressForm" component = {AddressForm}></Route>
            <Route path="/RestaurantCustomerView" component = {RestaurantCustomerView}></Route>


        </div>
    );
}

export default App;