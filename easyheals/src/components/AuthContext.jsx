import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [bearerToken, setBearerToken] = useState('');

  useEffect(() => {
    // Fetch the bearer token when the component mounts
    const tokenUrl = 'https://easyheals-website-middleware.azurewebsites.net/';

    axios
      .get(tokenUrl)
      .then((response) => {
        const newToken = response.data;
        setBearerToken(newToken);
      })
      .catch((error) => {
        console.error('Error fetching bearer token:', error);
      });
  }, []);

  return (
    <AuthContext.Provider value={bearerToken}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
