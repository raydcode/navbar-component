import React, { useState, useEffect, useRef } from 'react';

import logo from './logo.svg';

import { links, socialIcons } from './utils/constants';

import { FaBars } from 'react-icons/fa';

function NavBar() {
  const [show, setShow] = useState(false);
  const linksContainerRef = useRef(null);

  const linkRef = useRef(null);
  console.log('---------> ~ NavBar ~ linkRef', linkRef);

  const toggleLinks = () => {
    setShow(!show);
  };

  useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height;

    show
      ? (linksContainerRef.current.style.height = `${linksHeight}px`)
      : (linksContainerRef.current.style.height = `0px`);
  }, [show]);

  return (
    <nav>
      <div className="nav-center">
        {/* Nav-Header */}
        <div className="nav-header">
          <img src={logo} alt="Vscode" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linkRef}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
          {socialIcons.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
