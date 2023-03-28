import { useState } from 'react';
import { UserContext } from '../../hooks/user';

const initialUserAuthData = { avatar: '', login: '', email: '', password: '' };

export default function UserProvider({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userAuthData, setUserAuthData] = useState(initialUserAuthData);

  const loginUser = (userData) => {
    setUserAuthData(userData);
    setIsAuthorized(true);
  };

  const logoutUser = () => {
    setUserAuthData(initialUserAuthData);
    setIsAuthorized(false);
  };

  const updateUserData = (data) => {
    setUserAuthData((prevState) => ({ ...prevState, ...data }));
  };

  return (
    <UserContext.Provider
      value={{
        isAuthorized,
        userAuthData,
        loginUser,
        logoutUser,
        updateUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
