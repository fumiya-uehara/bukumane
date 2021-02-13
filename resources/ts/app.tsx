import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthProvider from "./context/auth/AuthProvider";

const App: React.FC = () => {
    return (
        <Router>
            <AuthProvider>
                <Header />
                <nav>
                    <ul>
                        <Link to="/">
                            <li>login</li>
                        </Link>
                        <Link to="/home">
                            <li>home</li>
                        </Link>
                        <Link to="/signup">
                            <li>signup</li>
                        </Link>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
                <Footer />
            </AuthProvider>
        </Router>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
