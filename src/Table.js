import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import axios from'axios'
import { useState, useEffect } from "react";
function Table() {

  const [data,setData] = useState([
   
  ]);

  const deletUser = async (e)=>{
    await axios.delete('http://localhost:3000/users/'+data[e.data[0].index].id).then(response=>{
       console.log(response.data)
    })
 };
 const addUser = async (e)=>{
  await axios.post('http://localhost:3000/users/'+data[e.data[0].index].id).then(response=>{
     console.log(response.data)
  })
};
 const handleClick = (e) => {
  console.log(data[e.data[0].index].id);
  data.splice(e.data[0].index,1);

  console.log(e)
  console.log(data)
  }
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "1rem",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontSize: "1rem",
          },
        },
      },
    },
  });
  const columns =[

 
  { name: 'type', label: 'Type' },
  { name: 'email', label: 'Email' }


]


useEffect(()=>{
  const getUsers = async ()=>{
     await axios.get('http://localhost:3000/users').then(response=>{
        setData(response.data);
        console.log(response.data)
     })
  };
  getUsers();
},[])

  const options = {
    filterType: "checkbox",
    onRowsDelete:(e)=>{deletUser(e)},
    selectableRows:'single',
    customToolbar: () => {
      return (
        <Tooltip title={"New Date"}>
          <IconButton
          onClick={handleClick}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
        
      );
    },
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MUIDataTable
          title={"User"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="form-group">
            <label  htmlFor="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
export default Table;
