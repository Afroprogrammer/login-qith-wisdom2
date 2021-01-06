import React from "react";

const Dashboard = props => {
  return (
    <div>
      <div>
        <h1>this is the dashboard</h1>
        <h1> STATUS:{props.loggedInStatus}</h1>
      </div>
    </div>
  );
}
export default Dashboard;
