import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home/Home";
import AddANewService from "./components/AddANewService/AddANewService";
import ManageAllBookings from "./components/ManageAllBookings/ManageAllBookings";
import MyBookings from "./components/MyBookings/MyBookings";
import About from "./components/About/About";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Booking from "./components/Booking/Booking";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Shared/Footer/Footer";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/myBookings">
              <MyBookings></MyBookings>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/manageAllBookings">
              <ManageAllBookings></ManageAllBookings>
            </Route>
            <Route path="/addANewService">
              <AddANewService></AddANewService>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
