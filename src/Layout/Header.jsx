import { Button } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as MdIcons from "react-icons/md";
import * as RxIcons from "react-icons/rx";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";

function Header(props) {
  const { sidebar, showSidebar } = props;
  return (
    <Container>
      <Row className={sidebar ? "Header-row" : "Header-row fixed-top"}>
        <Col xs={3} sm={3} md={3} lg={3}>
          {sidebar ? (
            <div className="welcome">Welcome back @User</div>
          ) : (
            <>
              <span style={{ float: "left" }}>
                <RxIcons.RxHamburgerMenu className="ham-icon" onClick={showSidebar}/>
              </span>
              <span className="welcomes">Welcome back </span>
              <br></br>
              <span className="name">@User</span>
            </>
          )}
        </Col>
        <Col xs={9} sm={9} md={9} lg={9}>
          <div style={{ float: "right" }}>
            <div className="ui icon input search-bar">
              <input placeholder="Search" type="text" />

              <i
                aria-hidden="true"
                className="search circular inverted link icon"
              >
                <BiIcons.BiSearchAlt2 />
              </i>
            </div>
            <span className="icons mt-3">
              <IoIcons.IoMdNotificationsOutline />
            </span>
            <span className="icons mt-3">
              <RxIcons.RxDashboard />
            </span>
            <Button>
              Logout &nbsp;
              <MdIcons.MdLogout className="log-icon" />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
