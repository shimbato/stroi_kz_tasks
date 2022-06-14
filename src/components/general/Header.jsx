import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  styled,
  Button,
  Box,
} from "@mui/material";
import { stringAvatar } from "../../utils/getAvatarString";
import { useEffect, useState } from "react";
import { logout } from "../../store/slice/auth";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import { CatalogModal } from "../shop/CatalogModal";
import { fetchCatalog } from "../../fetchers/fetchCatalog";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { StroiCategory } from "../shop/StroiCategory";

const MyBtn = styled("button")`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
`;

// const LinkBtn = styled ('navlink') `
// text-decoration: none;
// color: white
// `

export function Header({ title, leftContent, rightContent, ...rest }) {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const dispatch = useDispatch();

  const settings =
    [
      {
        name: "Logout",
        do: <MyBtn onClick={() => dispatch(logout())}>Logout</MyBtn>,
      },
    ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { currentUser } = useSelector((state) => state.auth);

  return (
    <AppBar position="sticky" {...rest}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          {title}
          {/* E-stroi.kz */}
        </Typography>
        <div>
          { leftContent }
        </div>

        {/* <Link  to="/stroicategory">
         Main
        </Link> */}
        <Box sx={{ flexGrow: 1 }} />
        <div>
          {rightContent}

          {/* <Box sx={{ flexGrow: 0 }}> */}
          <Tooltip title="Open settings">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpenUserMenu}
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} 
              onClick={handleCloseUserMenu} 
              style={{border: "1px solid ##1976D2"}}>
                <Typography textAlign="center">
                 
                  {setting.do}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        
        </div>
      </Toolbar>
    </AppBar>
  );
}
