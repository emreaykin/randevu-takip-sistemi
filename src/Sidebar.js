import "./Sidebar.css";
function Sidebar() {
  return (
    <div>
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar" className="active" style={{height: "100vh"}}>
          <h1>
            <a href="#" className="logo">
             N
            </a>
          </h1>
          <ul className="list-unstyled components mb-3">
            <li className="active">
              <a href="dashboard">
                <span className="fa fa-dashboard"></span> DashBoard
              </a>
            </li>
            <li>
              <a href="date">
                <span className="fa fa-calendar"></span> Date
              </a>
            </li>
            <li>
              <a href="trash">
                <span className="fa fa-trash"></span> Trash
              </a>
            </li>
            <li>
              <a href="/">
                <span className=" fa fa-sign-out"></span> Sign Out
              </a>
            </li>
          </ul>
        </nav>

   
      </div>
    </div>
  );
}

export default Sidebar;
