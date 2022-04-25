import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import React from "react";
import NewOrder from "./components/newOrderComponent";
import AllOrders from "./components/allOrdersComponent";

function App() {
  return (
    <nav className="App">
        <ul>
            <li className="nav-item">
                <Link to={"/newOrder"} className="nav-link">
                    New Order
                </Link>
            </li>
            <li className="nav-item">
                <Link to={"/allOrders"} className="nav-link">
                    All Order
                </Link>
            </li>
        </ul>
        <div className="container mt-3">
            <Switch>
                <Route exact path={["/", "/newOrder"]} component={NewOrder} />
                <Route path="/allOrders" component={AllOrders} />
            </Switch>
        </div>
    </nav>
  );
}

export default App;
