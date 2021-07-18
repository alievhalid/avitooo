import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUsers } from "../redux/actions";
import { Route } from "react-router-dom"
import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  return (
      <div className="container">
        <Header />
        <Content />
        <Footer />
        
      </div>

  );
}

export default App;
