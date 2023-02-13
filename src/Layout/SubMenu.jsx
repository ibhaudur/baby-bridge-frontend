import { Divider } from "@mui/material";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const SidebarNavLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  margin:0px 20px;
  list-style: none;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  width: ${({sidebar}) => (!sidebar ? '100px' : '180px')};

`;
const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px 10px 25px;
  list-style: none;
  height: 20px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
`;

const SidebarTitle = styled.span`
// font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 17.5882px;
line-height: 21px;
  color: #6842D9;
`;

const SubMenu = ({ item, sidebar }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      {sidebar ? (
        <>
          {" "}
          {item.subNav && showSubnav ? (
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
              <div>
                <SidebarTitle>{item.title}</SidebarTitle>
              </div>
            </SidebarLink>
          ) : (<>
            <SidebarNavLink sidebar={sidebar} to={item.path} onClick={item.subNav}>
              <div>
                
                <SidebarLabel><i className="dash-icon">{item.icon}&nbsp; {item.title}</i></SidebarLabel>
              </div>
            </SidebarNavLink>
            {item.hr === "true" ? (<Divider style={{margin:'8px 25px'}}></Divider>) : ""}
</>
          )}
        </>
      ) : (
        <>
          {" "}
          {item.subNav && showSubnav ? (
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
              <div style={{marginLeft:'-7px'}}>
                <SidebarTitle >{item.title}</SidebarTitle>
              </div>
            </SidebarLink>
          ) : (<>
            <SidebarNavLink to={item.path} onClick={item.subNav && showSubnav}>
              <i style={{marginLeft:'-7px'}}>{item.icon}</i>
            </SidebarNavLink>
            {item.hr === "true" ? (<Divider style={{margin:'8px 15px',marginRight:'187px'}}></Divider>) : ""}
</>
          )}
        </>
      )}
    </>
  );
};

export default SubMenu;
