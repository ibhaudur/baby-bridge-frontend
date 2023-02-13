import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Navbar } from "react-bootstrap";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import "../assets/Css/Style.css";
import logo from "../assets/image/logo.svg";
import Header from "./Header";


const SidebarNav = styled.nav`
  width: ${({ shotbar }) =>
    shotbar
      ? ({ sidebar }) => (sidebar ? "240px" : "70px")
      : ({ sidebar }) => (sidebar ? "240px" : "0px")};
  height: 99%;
  justify-content: center;
  position: fixed;
  display: flex;
  // top: 30px;
  // left: ${({ shortbar }) => (shortbar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  overflow-y: auto;
  border-right: 1px solid #E8EAEC;
`;

const SidebarWrap = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 70px;
`;
function Sidebar() {
  const [sidebar, setSidebar] = useState(true);
  const [shotbar, setshotbar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  let autoResize = () => {
    if (window.innerWidth < 790) {
      setSidebar(false);
      setshotbar(false);
    } else {
      setSidebar(true);
      setshotbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", autoResize);
    autoResize();
  }, []);

  return (
    <React.Fragment>
      <>
        <div
          className="layout-wrapper layout-content-navbar"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="layout-container">
            <SidebarNav
              className="layout-menu menu-vertical bg-menu-theme"
              sidebar={sidebar}
              shotbar={shotbar}
            >
              {sidebar ? (
                <img style={{ position: "fixed",margin:'-12px 0' }} src={logo} width="168" />
              ) : (
                ""
              )}

              <SidebarWrap>
                <ul className="menu-inner py-1">
                  {SidebarData.map((item, index) => {
                    return (
                      <li className="menu-item" key={index}>
                        <SubMenu item={item} sidebar={sidebar} />
                      </li>
                    );
                  })}
                </ul>
              </SidebarWrap>
            </SidebarNav>

            <div
              className={
                sidebar
                  ? shotbar
                    ? "layout-page"
                    : "layout-pagii"
                  : shotbar
                  ? "layout-pag"
                  : "layout-page"
              }
            >
              <Header sidebar={sidebar} showSidebar={showSidebar}/>
              <Container fluid >
                <Container style={{ marginTop: "5rem"}}>
                  <div className="content-wrapper mt-5 d-flex">
                    <Outlet />
                  </div>
                </Container>
              </Container>
            </div>
          </div>
        </div>
      </>
    </React.Fragment>
  );
}

export default Sidebar;
