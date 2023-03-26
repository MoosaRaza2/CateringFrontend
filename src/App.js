
import './App.css';
import Login from './Component/Login';
import Registration from './Component/Registration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarCustomer from './Component/NavbarCustomer';
import Slider from './Component/Slider';
import banner from './Data/data.json';
import data from './Data/data.json';
import CustomerHome from './Component/CustomerHome';
import CustomerOptions from './Component/CustomerOptions';
import PostCustomRequest from './Component/PostCustomRequest';
import ViewOrders from './Component/ViewOrders';
import OrderDetails from './Component/OrderDetails';
import Profile from './Component/Profile';
import SetLocation from './Component/SetLocation';

import CateringCard from './Component/CateringCard';
import CateringMainPage from './Component/CateringMainPage';
import CateringPage from './Component/CateringPage';
import Cart from './Component/Cart';
import ReviewPayment from './Component/ReviewPayment';
import CateringNavbar from "./Component/CateringNavbar";
import CateringHomePage from "./Component/CateringHomePage";
import CateringProfilePage from './Component/CateringProfilePage';
import CateringOrderPage from './Component/CateringOrderPage';
import CateringOrderDetails from './Component/CateringOrderDetails'
import CateringViewOrderRequest from './Component/CateringViewOrderRequest'
import CreateMenus from './Component/CreateMenus';
import CateringViewMenus from './Component/CateringViewMenus'
import Logout from './Component/Logout';
import EditMenu from './Component/EditMenu'
import Delete from './Component/Delete';
import MenuCard from './Component/MenuCard'
import FavouriteInterface from './Component/FavouriteInterface'
import AdminHome from './Component/AdminPanel/AdminHome'
import HomePageManagement from './ManagementModule/HomePageManagement';
import LoginPageManagement from './ManagementModule/LoginPageManagement';
import ManagementLogin from './ManagementModule/ManagementLogin'
import AddOrders from './ManagementModule/AddOrders';
import  AddEmployee from './ManagementModule/AddEmployee';
import ViewEmployee from './ManagementModule/ViewEmployee';
import DeleteEmployee from './ManagementModule/DeleteEmployee';
import EditEmployee from './ManagementModule/EditEmployee';
import CalculateSalries from './ManagementModule/CalculateSalries';
import ForgotPassword from './Component/ForgotPassword'
import ChangePassword from './Component/ChangePassword'
import Register from './Component/Register'
import OrderEmailConfirmation from './Component/OrderEmailConfirmation';
import ViewRequests from './Component/ViewRequests';
import DeleteCatering from './Component/DeleteCatering'
import Logins from './Component/AdminPanel/Logins';
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/CustomerHome" element={<CustomerHome />} />
        <Route path="/menu" element={<CustomerOptions />} />
        <Route path="/post" element={<PostCustomRequest />} />
        <Route path="/order" element={<ViewOrders />} />
        <Route path="/orderdetails/:id" element={<OrderDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/set" element={<SetLocation />} />
        <Route path="/carteringmainpage" element={<CateringMainPage />} />
        <Route path="/Caters/:id" element={<CateringPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/payment" element={<ReviewPayment />} />
        <Route path="/CateringHome" element={<CateringHomePage />} />
        <Route path="/CateringProfile" element={<CateringProfilePage />} />
        <Route path="/CateringOrderPage" element={<CateringOrderPage />} />
        <Route path="/CateringOrderDetails/:id" element={<  CateringOrderDetails />} />
        <Route path="/CateringViewOrderRequest" element={<  CateringViewOrderRequest />} />
        <Route path="/CreateMenus" element={< CreateMenus />} />
        <Route path="/ViewMenus" element={< CateringViewMenus />} />
        <Route path="/logout" element={< Logout />} />
        <Route path="/ViewMenus/Edit/:id" element={ <EditMenu />} />
        <Route path="/ViewMenus/Delete/:id" element={ <Delete />} />
        <Route path="/CustomerRegistration" element={ <Registration />} />
        <Route path="/CustomerLogin" element={ <Login />} />
        <Route path="/MenuCard" element={ <MenuCard />} />
        <Route path="/Favourite" element={ <FavouriteInterface />} />
        <Route path="/AdminHome" element={ <AdminHome />} />
        <Route path="/HomePagemanagment" element={ <HomePageManagement />} />
        <Route path="/LoginManagement" element={ <LoginPageManagement />} />
        <Route path="/ManagementLogin" element={ <ManagementLogin />} />
        <Route path="/AddOrders" element={ <AddOrders />} />
        <Route path="/AddEmployee" element={ < AddEmployee />} />
        <Route path="/ViewEmployee" element={ < ViewEmployee />} />
        <Route path="/ViewEmployees/Delete/:id" element={ < DeleteEmployee  />} />
        <Route path="/ViewEmployees/Edit/:id" element={ <EditEmployee  />} />
        <Route path="/CalculateSalaries" element={ <CalculateSalries  />} />
        <Route path="/forgotPassword" element={ <ForgotPassword  />} />
        <Route path="/changePassword" element={ <ChangePassword  />} />
        <Route path="/Registers" element={ <Register  />} />
        <Route path="/ConfirmationOrder" element={ <OrderEmailConfirmation />} />
        <Route path="/ViewRequests" element={ <ViewRequests />} />
        <Route path="/DeleteCatering/:id" element={ <DeleteCatering/>} />
        <Route path="/logins" element={ <Logins/>} />
        
       

    





      </Routes>
    </Router>

  );
}

export default App;
