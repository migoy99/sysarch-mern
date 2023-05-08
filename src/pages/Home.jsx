import React from 'react'
import NavBarLogged from '../components/NavBarLogged.jsx';

const Home = () => {

  const loggedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <NavBarLogged />
      <h1>Home Page</h1>
      <h2>hello {loggedUser.username}</h2>
    </>
  )
}

export default Home