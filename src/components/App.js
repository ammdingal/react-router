import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import AboutMe from './AboutMe.js';
import Home from './Home.js';
import Gallery from './Gallery.js';
import '../assets/stylesheets/style.css';

class App extends React.Component {
    render() {
        return (            
            <Router>
                <div className="MyWebsite">
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutMe">About Me</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    </ul>
                </div>
                <Routes>
                    <Route exact path='/' element={<Home/>}></Route>
                    <Route exact path='/aboutMe' element={<AboutMe/>}></Route>
                    <Route exact path='/gallery' element={<Gallery/>}></Route>
                </Routes>
            </Router>
        );
    }      
}

export default App;
