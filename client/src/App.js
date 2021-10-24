import logo from './logo.svg';
import logo12 from './logo12.svg';
import './App.css';
import React from 'react';
import { useState, useEffect, Component, Fragment} from 'react';

//components
import AddPost from './components/AddPost';
import ListPosts from './components/ListPosts';

const baseURL = "https://my-fullstack-demo.herokuapp.com/";

function App() {

  const [data, setData] = useState(null);

  React.useEffect(() => {
    const url = baseURL + "api/hello";
    fetch(url)
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
        <img src={logo} className="App-logo center" alt="logo"/>
        {/* <img src={logo12} className="" alt="logo"/> */}
        <footer>Built with React, Node, Express. A demo by Toan Phan</footer>
      </div>
    </Fragment>
  );
}


export default App;
