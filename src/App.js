
import React, { useState } from 'react';
import App_ccs from './ccs/App_ccs';
import App_star from './star/App_star';

const App = () => {

      const [selectedApp, setSelectedApp] = useState('');

      const handleAppChange = (menu) => {setSelectedApp(menu); };

      return (
        <div>
          <button onClick={() => handleAppChange('ccs')} >CCS   Login </button>
          <button onClick={() => handleAppChange('star')}>STAR  Login </button>

          {selectedApp === 'ccs' && <App_ccs />}
          {selectedApp === 'star' && <App_star />}
        </div>
      );
    };


export default App;