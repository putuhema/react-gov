import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Card from './components/Card';
import Input from './components/Main';
import Sktm from './components/Sktm';
import Skd from './components/Skd';
import Download from './components/Download';

function App() {
  const [option, setOption] = useState(0);
  const [data, setData] = useState({});

  const options = ['sktm', 'skd'];

  const inputData = (formData) => {
    setData(formData);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Card>
          <Routes>
            <Route
              path="/"
              element={
                <Input setOption={setOption} selectedOption={options[option]} />
              }
            />
            <Route path="/sktm" element={<Sktm onInput={inputData} />} />
            <Route path="/skd" element={<Skd onInput={inputData} />} />
            <Route path="/download" element={<Download data={data} />} />
          </Routes>
        </Card>
      </div>
    </Router>
  );
}

export default App;
