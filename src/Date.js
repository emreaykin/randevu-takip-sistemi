import Sidebar from "./Sidebar";
import Table from "./Table";
function Date() {
  return (
    <div className="row">
      <div className="col-1"  style={{marginRight:"5vh"}}>
        <Sidebar />
      </div>
      <div className="col" style={{margin:"auto" }}>
        <Table />
      </div>
      <div className="col-1"></div>
    </div>
  );
}

export default Date;
