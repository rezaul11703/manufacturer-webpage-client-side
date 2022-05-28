import logo from "./logo.svg";
import "./App.css";
import Header from "./Shared/Header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Purchage from "./Purchage/Purchage";
import SignUp from "./LogIn/SignUp";
import LogIn from "./LogIn/LogIn";
import Dashboard from "./Dashboard/Dashboard";
import MyOrders from "./Dashboard/MyOrders";
import UserReviews from "./Dashboard/UserReviews";
import UserProfile from "./Dashboard/UserProfile";
import ManageOrders from "./Dashboard/ManageOrders";
import AddProduct from "./Dashboard/AddProduct";
import AllUser from "./Dashboard/AllUser";
import ManageProduct from "./Dashboard/ManageProduct";
import PageNotFound from "./404/PageNotFound";
import MyProfile from "./Dashboard/MyProfile";
import SeeDetails from "./Dashboard/SeeDetails";
import MakeAdmin from "./Dashboard/MakeAdmin";
import RequiredAuth from "./LogIn/RequiredAuth.js/RequiredAuth";
import Blogs from "./Shared/Blogs";
import MyPortfolieo from "./Shared/MyPortfolieo";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequiredAuth>
              <Purchage></Purchage>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route
            path="/dashboard/userReviews"
            element={<UserReviews></UserReviews>}
          ></Route>
          <Route
            path="/dashboard/userProfile"
            element={<UserProfile></UserProfile>}
          ></Route>
          <Route
            path="/dashboard/myProfile"
            element={<MyProfile></MyProfile>}
          ></Route>
          <Route
            path="/dashboard/manageAlloders"
            element={<ManageOrders></ManageOrders>}
          ></Route>
          <Route
            path="/dashboard/makeAdmin"
            element={<MakeAdmin></MakeAdmin>}
          ></Route>
          <Route
            path="/dashboard/addProduct"
            element={<AddProduct></AddProduct>}
          ></Route>
          <Route path="/dashboard/users" element={<AllUser></AllUser>}></Route>
          <Route
            path="/dashboard/manageProducts"
            element={<ManageProduct></ManageProduct>}
          ></Route>
          <Route
            path="/dashboard/seeDetails"
            element={<SeeDetails></SeeDetails>}
          ></Route>
        </Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/pp" element={<MyPortfolieo></MyPortfolieo>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
