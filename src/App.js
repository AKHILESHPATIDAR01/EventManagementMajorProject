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
import Cart from './Components/Cart';

function App() {
  const [cartitems , setCartItems] = useState([]);
  // const [cartitems , setCartItems] = useState([{
  //               id: "FC001001",
  //               dish_name: "Iced Tea",
  //               img: "",
  //               base_price: 10,
  //           },{
  //               id: "FC001002",
  //               dish_name: "Cold Coffee",
  //               img: "",
  //               base_price: 25,
  //           },{
  //               id: "FC001003",
  //               dish_name: "Hot Coffee",
  //               img: "",
  //               base_price: 15,
  //           },{
  //               id: "FC001004",
  //               dish_name: "Lassi",
  //               img: "",
  //               base_price: 15,
  //           },{
  //               id: "FC001005",
  //               dish_name: "Sarbat",
  //               img: "",
  //               base_price: 10,
  //           },{
  //               id: "FC001006",
  //               dish_name: "Thandai",
  //               img: "",
  //               base_price: 15,
  //           },{
  //               id: "FC001007",
  //               dish_name: "Nimbu Paani",
  //               img: "",
  //               base_price: 10,
  //           },{
  //               id: "FC001008",
  //               dish_name: "Mixed Fruit Juice",
  //               img: "",
  //               base_price: 15,
  //           },{
  //               id: "FC001009",
  //               dish_name: "Orange Juice",
  //               img: "",
  //               base_price: 15,
  //           },{
  //               id: "FC001010",
  //               dish_name: "Pineapple Juice",
  //               img: "",
  //               base_price: 15,
  //           },]);
  const [noOfGuests , setNoOfGuests] = useState(0);
  const [venue , setVenue] = useState([]);
  const [photos , setPhotos] = useState([]);
  const [photosOne , setPhotosOne] = useState([]);
  const [total , setTotal] = useState(0);
  const [venuePrice, setvenuePrice] = useState(0);

  return (
    <div className="container">
      <BrowserRouter>
          <Header cartitem={cartitems} setCartItems={setCartItems} />
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
          <Switch>
            {/* <Route path="/stepone" exact component={StepOne} /> */}
            <Route path="/stepone" exact>
                <StepOne 
                  guests = {noOfGuests} 
                  updateGuests={setNoOfGuests} 
                />
            </Route>
          </Switch>
          <Switch>
            <Route path="/steptwo" exact>
                <StepTwo 
                  venue={venue} 
                  setVenue={setVenue}
                  total = {total}
                  setTotal = {setTotal}
                  venuePrice = {venuePrice}
                  setvenuePrice = {setvenuePrice}
                />
            </Route>
          </Switch>
          <Switch>
            <Route path="/stepthree" exact>
                <StepThree 
                  cartitem={cartitems} 
                  setCartItems={setCartItems} 
                  total = {total}
                  setTotal = {setTotal}
                  />
            </Route>
          </Switch>
          <Switch>
            <Route path="/stepfour" exact>
              <StepFour 
                photos ={photos}
                setPhotos ={setPhotos}
                total = {total}
                setTotal = {setTotal}
                photosOne ={photosOne}
                setPhotosOne = {setPhotosOne}
              />
            </Route> 
          </Switch>
          <Switch>
            <Route path="/stepfive">
              <StepFive 
                photos ={photos}
                setPhotos ={setPhotos}
                total = {total}
                setTotal = {setTotal}
                photosOne ={photosOne}
                setPhotosOne = {setPhotosOne}
              />
            </Route>
            {/* component={StepFive} /> */}
          </Switch>
          {/* <Switch>
            <Route path="/stepsix" exact component={StepSix} />
          </Switch> */}
          <Switch>
            <Route path="/cart" exact>
                <Cart 
                  cartitem={cartitems} 
                  setCartItems={setCartItems} 
                  venue={venue} 
                  setVenue={setVenue} 
                  total = {total}
                  setTotal = {setTotal}
                  photos ={photos}
                  setPhoto = {setPhotos}
                  guests = {noOfGuests} 
                  updateGuests={setNoOfGuests}
                />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
