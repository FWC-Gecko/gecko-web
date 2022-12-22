import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { withTrans } from "./i18n/withTranslations";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import { LOGOUT } from "./actions/types";

// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PrivateRoute from "./components/routing/PrivateRoute";

// Views
import Home from "./views/Home";
import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";
import Header from "./components/layout/Header";
import Loading from "./components/layout/Loading";
import Profile from "./views/auth/Profile";
import ListToken from "./views/listToken/ListToken";
import TokenDetail from "./views/TokenDetail";

function App() {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  const Container = ({
    isHeader = true,
    isNavbar = true,
    isFooter = true,
    Component,
    children,
  }) => {
    return (
      <>
        {isHeader && <Header />}
        {isNavbar && <Navbar />}
        {Component && <Component />}
        {children}
        {isFooter && <Footer />}
      </>
    );
  };

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Container Component={Home} />} />
          <Route
            path="/token-detail/:tokeId"
            element={<Container Component={TokenDetail} />}
          />
          <Route
            path="/login"
            element={
              <Container
                Component={Login}
                isNavbar={false}
                isHeader={false}
                isFooter={false}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Container
                Component={SignUp}
                isNavbar={false}
                isHeader={false}
                isFooter={false}
              />
            }
          />

          <Route
            path="/user/profile"
            element={
              <Container>
                <PrivateRoute component={Profile} />
              </Container>
            }
          />
          <Route
            path="/list-token"
            element={
              <Container>
                <PrivateRoute component={ListToken} />
              </Container>
            }
          />
        </Routes>
      </Router>
      <Loading />
      <ToastContainer theme="dark" />
    </Provider>
  );
}

export default withTrans(App);
