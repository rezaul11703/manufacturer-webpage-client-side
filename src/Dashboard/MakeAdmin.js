import React from "react";
import { toast, ToastContainer } from "react-toastify";

const MakeAdmin = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    alert("clicked");
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully Make An Admin");
        }
      });
  };
  return (
    <tr>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button class="btn btn-xs" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
  <ToastContainer />;
};

export default MakeAdmin;
