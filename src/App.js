import RestaurantScreen from './components/RestaurantScreen';
import {Provider} from 'react-redux';
import store from './store';
import {lightBlue} from '@mui/material/colors';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {AppBar, Container, Toolbar, Typography} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: lightBlue,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Opinion Ate</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <RestaurantScreen />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}
