
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/LoginAndRegistration/Login/Login';
import Registration from './Pages/LoginAndRegistration/Registration/Registration';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Products from './Pages/Products/Products';
import PrivateRoute from './Pages/LoginAndRegistration/Login/PrivateRoute/PrivateRoute';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import Purchase from './Pages/Products/Purchase';
import Deshbord from './Pages/Dashboard/Dashboard/Deshbord';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import OrderProducts from './Pages/Dashboard/OrderProducts/OrderProducts';
import Footer from './Pages/Fooder/Footer';
import NotFound from './Pages/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/addproduct">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/products">
              <Products></Products>
            </PrivateRoute>
            <PrivateRoute path="/dashbord">
              <Deshbord></Deshbord>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/allorder">
              <OrderProducts></OrderProducts>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registerd">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
