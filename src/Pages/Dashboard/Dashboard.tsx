import React from "react";
import DashTable from "./DashTable";
import EnhancedTable from "./EnhancedTable";
import Statistics from "./Statistics";


function Dashboard() {
  return (
    <React.Fragment>
      <div>
        <Statistics />
        <DashTable />
        <EnhancedTable/>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
