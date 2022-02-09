import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
function Main() {
  
    return (
    <div>
            <Button
                id="basic-button"
              className="border"
        >
            Dashboard
          </Button>
          <Menu
        id="basic-menu"
      
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        <div className="bg-red-400 text-center text-2xl w-10/12 mx-auto text-green-100">
            <h1>Kamolon darvozasi</h1>
        </div>
        <div>   

        </div>
    </div>
    );
}

export default Main;
