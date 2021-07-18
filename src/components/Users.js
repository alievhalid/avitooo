import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Users() {
  const users = useSelector((state) => state.users.items);
  return (
    <div className="photos">
      {users.map((photo) => {
        return (
          <div key={photo.id} className="images">
            <Link to={`${photo.id}`}>
              <img src={photo.url} alt="" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
