import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Notfound from "./components/Notfound/Notfound";
import PrivateRoute from "./components/privateroute/privateRoute";
import Register from "./components/Register/Register";
import ServiceDetail from "./components/Services/ServiceDetail";
import Services from "./components/Services/Services";

function App() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setTest(data));
  }, []);
  return (
    <Router>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Header />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <PrivateRoute exact path="/contact">
            <Contact />
          </PrivateRoute>
          <PrivateRoute exact path="/services">
            <Services />
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute exact path="/service/:serviceId">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>

         
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="*">
            <Notfound />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
