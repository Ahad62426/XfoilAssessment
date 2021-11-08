import { useState } from 'react';

import LoginPage from './views/LoginPage';

import 'antd/dist/antd.css'
import InfoPage from './views/InfoPage';

function App() {

  const [info, setInfo] = useState(null)

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(0, 0, 0, 0.1)'
    }}>
      {!info
        ? <LoginPage setInfo={setInfo} />
        : <InfoPage info={info} />
      }
    </div>
  );
}

export default App;
