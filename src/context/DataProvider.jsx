import React, { createContext, useState } from 'react';

// Create a context
export const DataContext = createContext(null);

// Create the provider component
const DataProvider = ({ children }) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <DataContext.Provider value={{ html, setHtml, css, setCss, js, setJs }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
