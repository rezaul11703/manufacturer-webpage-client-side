import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import MakeAdmin from "./MakeAdmin";

const AllUser = () => {
  const {
    data: allUsers,
    isLoading,
    refetch,
  } = useQuery("allUsers", () =>
    fetch("https://computer-part.herokuapp.com/allusers", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>Make Admin</th>
            </tr>
          </thead>

          <tbody>
            {allUsers.map((user) => (
              <MakeAdmin
                key={user._id}
                user={user}
                refetch={refetch}
              ></MakeAdmin>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
