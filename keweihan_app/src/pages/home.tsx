import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Button, Alert } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import '../css/home.css';

import qubeDemo from '../files/p2_gold_web/QUBE_demo.mp4';
import ddDemo from '../files/desktopDefender/generalGameplay.mp4';
import simpleEcsDemo from '../files/pong/simpleECSallDemo.mp4';
import warpBallDemo from '../files/warpball/8-22/8-22general.mp4';
import orbitVrDemo from '../files/orbitVR/Sequence 02.mp4'

function Home () {
    return (
        <div id="center">
        <div id="title">
            <h2>Hello!</h2>
            <p>
            I study software engineering and computer science, and usually enjoy learning through game projects.
            Check out some of my favourite projects below!
            </p>
            <hr style={{ height: '2px' }} />
        </div>
    
        <div id="item_list" style={{ margin: '20px' }}>
            <div className="item">
            <div className="item_display">
                <video autoPlay muted loop playsInline poster="files/alpha_1px.png" style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)', width: '100%' }}>
                    <source src={ qubeDemo } type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="item-info">
                <h3>QUBE</h3>
                <div className='item-tech'>
                <span className="badge rounded-pill bg-secondary">C#</span>
                <span className="badge rounded-pill bg-secondary">Unity</span>
                </div>
                <div className="item-desc">
                Rapid 2 week original game prototype created in Unity.
                Play as a seemingly 2D square with the ability to traverse 3D space.
                </div>
                <a href="./html/qube.html">
                <button type="button" className="btn btn-dark" id="qube-btn">Learn more</button>
                </a>
            </div>
            </div>
    
            <div className="item">
            <div className="item_display">
                <video autoPlay muted loop playsInline poster="files/alpha_1px.png" style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)', width: '100%'}}>
                    <source src={ simpleEcsDemo } type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="item-info">
                <h3>SimpleECS</h3>
                <div className="item-tech">
                <span className="badge rounded-pill bg-secondary">C++</span>
                </div>
                <div className="item-desc">
                Custom game framework implementing Entity Component System built on top of SDL.
                Features pooled components and spatial grid collision detection implementation.
                Used to implement Pong and Conway's Game of Life.
                </div>
                <a href="./html/simpleECS.html">
                <button type="button" className="btn btn-dark" id="ecs-btn">Learn more</button>
                </a>
            </div>
            </div>
    
            <div className="item">
            <div className="item_display">
                <figure>
                <video autoPlay muted loop playsInline poster="files/alpha_1px.png" style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)', width: '100%'}}>
                    <source src= { ddDemo } type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </figure>
            </div>
            <div className="item-info">
                <h3>Desktop Defenders</h3>
                <div className="item-tech">
                <span className="badge rounded-pill bg-secondary">C#</span>
                <span className="badge rounded-pill bg-secondary">Unity</span>
                </div>
                <div className="item-desc">
                A 2 Month project with team of five to design and develop an original game.
                Play with a friend with one as the cursor and the other as the antivirus to defend your computer
                against waves of viruses and virus bosses.
                </div>
                <a href="./html/desktopDefenders.html">
                <button type="button" className="btn btn-dark" id="dd-btn">Learn more</button>
                </a>
            </div>
            </div>
    
            <div className="item">
            <div className="item_display">
                <figure>
                <video autoPlay muted loop playsInline poster="files/alpha_1px.png" style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)', width: '100%'}}>
                    <source src={ orbitVrDemo } type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
                </figure>
            </div>
            <div className="item-info">
                <h3>OrbitVR</h3>
                <div className="item-tech">
                <span className="badge rounded-pill bg-secondary">Unreal Blueprint</span>
                <span className="badge rounded-pill bg-secondary">Unreal Engine</span>
                </div>
                <div className="item-desc">
                A 4 Week Virtual Reality project in Unreal Engine with team of four.
                An International Space Station simulation experience.
                </div>
                <a href="./html/orbit-vr.html">
                <button type="button" className="btn btn-dark">Learn more</button>
                </a>
            </div>
            </div>
    
            <div className="item">
            <div className="item_display">
                <figure>
                <video autoPlay muted loop playsInline poster="files/alpha_1px.png" style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)', width: '100%'}}>
                    <source src={ warpBallDemo } type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                </figure>
            </div>
            <div className="item-info">
                <h3>Warpball</h3>
                <div className="item-tech">
                <span className="badge rounded-pill bg-secondary">C#</span>
                <span className="badge rounded-pill bg-secondary">Unity</span>
                </div>
                <div className="item-desc">
                A personal project in Unity Engine to develop an arcade style infinite runner.
                </div>
                <a href="./html/warpball.html">
                <button type="button" className="btn btn-dark" id="warpball-btn">Learn more</button>
                </a>
            </div>
            </div>
    
            <button type="button" className="btn btn-dark">More projects in sidebar</button>
            <br />
        </div>
        </div>
    );
};
  
  export default Home;