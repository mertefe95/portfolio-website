import React from 'react';
import Nav from "../src/components/Nav";
import Home from "../src/components/Home";
import Footer from "../src/components/Footer";
import About from "../src/components/About";
import MyWorks from "../src/components/MyWorks";
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/about" exact component={About} /> 
          <Route path="/myworks" exact component={MyWorks} /> 
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
