import { BrowserRouter , Route , Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Homepage';
import StepOne from './Components/StepOne';
import StepTwo from './Components/StepTwo';
import StepThree from './Components/StepThree';
import StepFour from './Components/StepFour';
import StepFive from './Components/StepFive';
import StepSix from './Components/StepSix';
import { useState } from 'react';
import Header from './Components/Header';

function App() {
  const [cartitems , setCartItems] = useState([]);

  return (
    <div className="container">
      <BrowserRouter>
          <Header cartitem={cartitems} setCartItems={setCartItems} />
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
          <Switch>
            <Route path="/stepone" exact component={StepOne} />
          </Switch>
          <Switch>
            <Route path="/steptwo" exact>
                <StepTwo  cartitem={cartitems} setCartItems={setCartItems}/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/stepthree" exact component={StepThree} />
          </Switch>
          <Switch>
            <Route path="/stepfour" exact component={StepFour} />
          </Switch>
          <Switch>
            <Route path="/stepfive" exact component={StepFive} />
          </Switch>
          <Switch>
            <Route path="/stepsix" exact component={StepSix} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
