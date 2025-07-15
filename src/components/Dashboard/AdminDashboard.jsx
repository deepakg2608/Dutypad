import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
function AdminDashboard(props) {
  return (
    <div className="min-h-screen bg-[#1c1c1c] p-10 text-zinc-100">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
