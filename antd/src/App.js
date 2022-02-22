import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import React from 'react';
import { Button } from 'antd';
import './App.css';
import Post from './Post'
import "./index.css";
import PostAddComment from "./PostAddComment";
import CreatComment from "./CreatComment";
import axios from "axios";
import PersonList from "./PersonList";
import React,{useEffect, useState} from "react";
// const data = {
//     "title": "The Best",
//     "author": "Sheldon"
// }
// const baseUrl = "http://jsonplaceholder.typicode.com/posts/10";
const baseUrl = "http://localhost:3000";

function App () {
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setPost(response.data)
        })
    },[]);

    if (!post) return null;
    // console.log(post.description)
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>{post.id}</p>

        </div>
    )

}
// function App() {
//     return (
//         <div className="App">
//             <div  color="blue"><h1>Welcome to Health App!</h1></div>
//                 <header className="header-home">Logo img</header>
//             {/*<Routes>*/}
//             {/*    <Route path="/" element={<Post/>}/>*/}
//             {/*/!*    /!*<Route path="events" element={<Post/>}/>*!/*!/*/}
//             {/*/!*    /!*<Route path="doctors" element={<Post/>}/>*!/*!/*/}
//             {/*/!*    /!*<Route path="clients" element={<Post/>}/>*!/*!/*/}
//             {/*/!*    /!*<Route path="appointments" element={<Post/>}/>*!/*!/*/}
//             {/*</Routes>*/}
//                <footer className="footer-home">Name of your apps</footer>
//         </div>
//
//     );
// }
// export default function Post (props) {
//     return (<div className="container-post">
//             <div className="description">
//                 <button className="btn-edit">Edit</button>
//             </div>
//             <div className="title-author">
//                 <div className="title">
//                     <h3>Title </h3>
//                     <p>{props.title}</p>
//                 </div>
//                 <div className="author">
//                     <p>Author </p>
//                     <p>{props.author}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const App = () => (
//     <div className="App">
//
//         <h3>Hello</h3>
//       <Button type="primary">Button</Button>
//         {/*<div>{Post("G", "F")}</div>*/}
//         {/*{<div>{PostAddComment()}</div>}*/}
//         {/*{<div>{CreatComment()}</div>}*/}
//         {<div>{PersonList}</div>}
//         {/*<section className="section-posts">*/}
//         {/*    <header className="header-posts">Logo img</header>*/}
//         {/*    <main className="main-posts-container">*/}
//         {/*        <div className="info-posts">*/}
//         {/*            <h3>All posts</h3>*/}
//         {/*            <button>Add post</button>*/}
//         {/*        </div>*/}
//
//         {/*        <div className="all-posts">*/}
//
//         {/*        </div>*/}
//         {/*        <footer className="footer-posts">Name of your app</footer>*/}
//         {/*    </main>*/}
//         {/*</section>*/}
//
//
//     </div>
// );


// import logo from './logo.svg';
// import './App.css';
//
// function App() {
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
//     </div>
//   );
// }

export default App;
