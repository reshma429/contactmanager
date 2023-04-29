import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  console.log(users, "test14");
  return (
    <>
      <div className="container">
      <nav
        style={{ paddingLeft: "10px" }}
        className="flex justify-center items-center  px-4 py-2 bg-slate-900"
      >
        <h1 className="text-white text-center text-2xl font-bold">
          Contact Page
        </h1>
      </nav>
        <br />
        <Link
          to="/create"
          className="w-48  justify-center bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Create Contact
        </Link>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {users.map((user, index) => (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg"
              key={index}
            >
              <div className="px-6 py-4">
                <div className="text-xl mb-2">
                  <span className="font-bold">First Name:</span>{" "}
                  {user.firstName} <br />
                  <span className="font-bold">Last Name:</span> {user.lastName}
                </div>
              </div>
              <div className="px-6 py-4">
                <Link
                  to={`/edit/${user.id}`}
                  className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full mr-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
