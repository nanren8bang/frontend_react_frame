

import { useState } from 'react';
import GlobalContext from './GlobalContext';

const GlobalContextProvider = ({ children }) => {

   

  const [menuPath, setMenuPath] = useState('/'  );

  return (
          <GlobalContext.Provider value={{menuPath, setMenuPath }}>
           {children}
          </GlobalContext.Provider>
        );
};

export default  GlobalContextProvider;