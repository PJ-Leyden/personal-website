import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface IRootProps {}

const Home: React.FC<IRootProps> = (prop) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PJ Leyden
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid></Grid>
    </Box>
  );
};

export default Home;
