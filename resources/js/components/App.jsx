import React, { useState, useEffect, useRef } from "react";

import { Image } from "react-bootstrap";
import axios from 'axios';
import "./App.scss";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef();
  const bannerRef = useRef();
  const facebookRef = useRef();
  const instagramRef = useRef();

  useEffect(() => {
    axios.get('http://your-api-url/images')
      .then(response => {
        const images = response.data;
        logoRef.current.src = images[0].path;
        bannerRef.current.src = images[1].path;
        facebookRef.current.src = images[2].path;
        instagramRef.current.src = images[3].path;
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="nav">
        <Image ref={logoRef} src="" alt="logo" fluid rounded />
        <ul className={menuOpen ? "open" : ""}>
          {/* ... */}
        </ul>
        <div className="menu">
          <button onClick={() => setMenuOpen(!menuOpen)}>Menú</button>
        </div>
      </div>

      <div className="banner">
        <Image ref={bannerRef} src="" alt="banner" fluid />
        {/* ... */}
        <div className="social">
          <Image ref={facebookRef} src="" alt="facebook" fluid rounded />
          <Image ref={instagramRef} src="" alt="instagram" fluid rounded />
        </div>
      </div>

      <div className="content">
        {/* ... */}
      </div>
    </div>
  );
};

export default App;
