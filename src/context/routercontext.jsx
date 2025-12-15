import React, { createContext, useState } from 'react';

/**
 * @typedef {'home'|'tasks'|'settings'} Route
 */

const RouterContext = createContext({
  currentRoute: 'home',
  navigate: () => {}
});


const Router = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState('home');

  return (
    <RouterContext.Provider value={{ currentRoute, navigate: setCurrentRoute }}>
      {children}
    </RouterContext.Provider>
  );
};

Router.displayName = 'Router';

export default Router;
export { RouterContext };