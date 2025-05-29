import React from "react"
import ReactDOM from "react-dom/client"
import createRoot from "react-dom/client"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./index.css"
import {Provider  } from 'react-redux'
import BrowserRouter from "react"
import App from "./App"
import { createStore, applyMiddleware,compose } from "redux";
// import thunk from "redux-thunk"
import reducers from "./reducers"
import {configureStore} from "@reduxjs/toolkit"
const theme = createTheme()

const store = configureStore({
  reducer:reducers
})


// ReactDOM.render(<App/>,document.getElementById("root"))
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>

  <ThemeProvider theme={theme}>

<App/>
  </ThemeProvider>
  </Provider>
)