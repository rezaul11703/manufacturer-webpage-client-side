import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import "react-confirm-alert/src/react-confirm-alert.css";

import Loading from "../Shared/Loading";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://computer-parts-corner.herokuapp.com/userCart/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  if (loading) {
    return <Loading></Loading>;
  }
  const handleButton = ({ id }) => {
    confirmAlert({
      title: "Delete  This Cart",
      message: "Are you sure Want to delete ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            fetch(
              `https://computer-parts-corner.herokuapp.com/userCart/${id}`,
              {
                method: "Delete",
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  const remainItem = users.filter((item) => item._id !== id);
                  setUsers(remainItem);
                }
              });
          },
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Product Name</th>
              <th>Total Quantity</th>
              <th>Total Cost</th>
              <th>Payment Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.productName}</td>
                <td>{user.totalOrdered}</td>
                <td>{user.netPrice}</td>
                <td>Not Available</td>
                <td>
                  <button onClick={() => handleButton(user._id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
