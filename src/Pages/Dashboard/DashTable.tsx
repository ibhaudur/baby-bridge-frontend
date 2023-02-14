import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import * as TbIcons from 'react-icons/tb'
import * as CgIcons from 'react-icons/cg'

function DashTable() {
  return (
    <div className="Dash-table mt-4">
      <ul>
        <li className="acti">Today Follow up</li>
        <li>Needs Action</li>
        <li>Converted</li>
        <li>In Progress</li>
        <li>Not Interested</li>
        <li>Not Answerd</li>
        <li>All</li>
      </ul>
      <div style={{float:'right'}}>
      <PopupState variant="popover" popupId="demo-popup-menu" >
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)} id='btn'>
           + Add leads
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem id="menu" onClick={popupState.close}><TbIcons.TbNotes/>&nbsp;Add Manually</MenuItem>
            <MenuItem id="menu" onClick={popupState.close}><CgIcons.CgTouchpad/>&nbsp;Add From file</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    </div>
    </div>
  );
}

export default DashTable;
