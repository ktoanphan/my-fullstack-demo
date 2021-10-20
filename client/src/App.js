import logo from './logo.svg';
import logo12 from './logo12.svg';
import './App.css';
import React from 'react';
import { useState, useEffect, Component, Fragment} from 'react';

//components
import AddPost from './components/AddPost';
import ListPosts from './components/ListPosts';

function App() {

  const [data, setData] = useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  
  return (
    <Fragment>
      <h2 className="text-center mt-3">{!data ? "loading..." : data}</h2>
      <div className="container"> 
      <AddPost></AddPost>
      <ListPosts></ListPosts>
      </div>

      <div className="text-center mt-5">
        <img src={logo} className="App-logo" alt="logo"/>
        <img src={logo12} alt="logo"/>
        <footer>Built with React, Node, Express. - Toan Phan</footer>
      </div>
    </Fragment>
  );
}


export default App;
