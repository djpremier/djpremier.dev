import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

library.add(fab, faCheckSquare, faCoffee, faEnvelope)

const theme = createMuiTheme({
  palette: {
    // type: "dark",
    primary: {
      light: "#62727b",
      main: "#37474f",
      dark: "#102027",
    },
    secondary: {
      light: "#48a999",
      main: "#00796b",
      dark: "#004c40",
    }
  },
  spacing: 5
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>, document.getElementById('header'));
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
