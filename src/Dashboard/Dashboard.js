import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../Hook/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <h2 className="text-3xl text-purple-600">Welcome to the Dashboard </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {admin ? (
            <>
              <li>
                <Link to="/dashboard/manageAlloders">Manage Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Add Product</Link>
              </li>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/manageProducts">Manage Product</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/userReviews">UserReviews</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/dashboard/myProfile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
