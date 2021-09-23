import React, { useState } from 'react';
import { Menu } from './components/Menu';
import GridMap from './components/GridMap';

const App: React.FC = () => {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  return (
    <>
      <Menu
        rows={rows}
        cols={cols}
        setRows={setRows} 
        setCols={setCols}
      />
      <GridMap 
        rows={rows} 
        cols={cols} 
      />
    </>
  );
}

export default App;
