import logo from './logo.svg';
import logo12 from './logo12.svg';
import './App.css';
import React from 'react';
import { useState, useEffect, Component} from 'react';


// const handleSubmit = async e => {
//   e.preventDefault();
//   const response = await fetch('/api/world', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ post: e.target.value}),
//   });
//   const body = await response.text();

//   return body;
// };

// function App() {

//   const [data, setData] = React.useState(null);

//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api/hello")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>


//       </header>

//       <p>{!data ? "Loading..." : data}</p>

//       <form onSubmit={handleSubmit} post={post}>
//           <p>
//             <strong>Post to Server:</strong>
//           </p>
//           <input
//             type="text"
//             value={post}
//             onChange={e => setPost(e.target.value)}
//           />
//           <button type="submit">Submit</button>
//         </form>
//         <p>{post}</p>

//     </div>
//   );
// }


class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.message }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <img src={logo12} className="App-logo12" at="logo" />

        <div className="body">
        <p>{this.state.response}</p>

<form onSubmit={this.handleSubmit}>
  <p>
    <strong>Post to Server:</strong>
  </p>
  <input
    type="text"
    value={this.state.post}
    onChange={e => this.setState({ post: e.target.value })}
  />
  <button type="submit">Submit</button>
</form>
<p>{this.state.responseToPost}</p>
        
        </div>

      </div>
    );
  }
}

export default App;
