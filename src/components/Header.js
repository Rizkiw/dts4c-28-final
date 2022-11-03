import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";
// import Link from "@mui/material/Link";

export default function Header(props) {
  const [q, setQ] = useState(""); //fitur search

  //Sticky Header
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    let header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  // console.log('header', props.data);
  return (
    <div className="header">
      <Container maxWidth="lg">
        <div className="header-menu-wrap">
          <Link to="/" underline="hover" color="inherit">
            <img src={logo} alt="Logo" height={50} />
          </Link>
          <div>
            <InputBase
              type="search"
              name="search-form"
              className="search-input"
              placeholder="Search…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            {/* <Link
            href="/signup"
            underline="hover"
            color="inherit"
            backgroundColor="hover"
          >
            <h3>Login</h3>
          </Link> */}
          </div>
        </div>

        {/* NAVBAR HERE */}
        <div className="navbar-wrap">
          <Container maxWidth="m">
            <div
              id="sticky-navbar"
              className={`navbar${sticky.isSticky ? " sticky" : ""}`}
              ref={headerRef}
              style={{ marginTop: sticky.offset - 70 }}
            >
              <div className="navbar-menu">
                <Link to="/" underline="hover" color="inherit">
                  <h3>Home</h3>
                </Link>
                <Link to="/entertainment" underline="hover" color="inherit">
                  <h3>Entertainment</h3>
                </Link>
                <Link to="/sport" underline="hover" color="inherit">
                  <h3>Sport</h3>
                </Link>
                <Link to="/science" underline="hover" color="inherit">
                  <h3>Science</h3>
                </Link>{" "}
                <Link to="/business" underline="hover" color="inherit">
                  <h3>Business</h3>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}
