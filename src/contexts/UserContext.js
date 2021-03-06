import React, { createContext, useState, useEffect } from "react";
import { UserService } from "../services/UserService";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const userService = new UserService();

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    userService.findAll().then((data) => setUsers(data));                
  }, []);

  const registerUser = (user) => {
    userService.register(user).then((data) => setUsers([...users, data]));
  };

  const deleteUser = (id) => {
    userService
      .delete(id)
      .then(() => setUsers(users.filter((p) => p._id !== id)));
  };

  const findUser = (id) => {
    const user = users.find((p) => p._id === id);
  };

  const updateUser = (user) => {
    userService
      .update(user)
      .then((data) =>
        setUsers(users.map((p) => (p._id === user._id ? data : user)))
      );
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
        deleteUser,
        findUser,
        updateUser,
        users,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
