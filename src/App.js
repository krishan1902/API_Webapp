import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css'

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Service from './pages/Service' 
import Text2Image from './pages/TextToImage'
import NoPage from './pages/NoPage'

function App() {
  return (
    <>

      <div id='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="service" element={<Service />} />
              <Route path="image" element={<Text2Image />} />
              <Route path="*" element={<NoPage /> } />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
