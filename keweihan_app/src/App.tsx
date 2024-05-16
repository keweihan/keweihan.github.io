import React from 'react';


function openURL(url: string) {
    window.location.href = url;
}

function toggleDarkMode() {
// Implement the function
}

function toggleSkin() {
// Implement the function

}

function App() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.tsx</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
  
    return (
        <div>
        <div id="flex-wrapper">
          <div id="bar"></div>
          <div id="left-column">
            <div id="link-hub">
              <img id="profile-photo" src="files/profile.png" alt="Profile" />
    
              <div id="name">
                <h2 style={{ fontWeight: 500, marginBottom: '0px' }}>Kevin Han</h2>
                <p>
                  Master's of Software Engineering student
                  <br />
                  Carnegie Mellon University, Pittsburgh
                </p>
              </div>
    
              <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                <nav id="link-list">
                  <button onClick={() => openURL('./html/home.html')} className="link">Home</button>
                  <button onClick={() => openURL('./files/Kewei_Han_Resume.pdf')} className="link">Resume</button>
    
                  <hr style={{ width: '100%' }} />
                  <button className="link dropbtn" data-target="vr-ar-dropdown">VR/AR</button>
                  <div id="vr-ar-dropdown" className="link-group">
                    <li><button onClick={() => openURL('./html/orbit-vr.html')} className="link">OrbitVR</button></li>
                    <li><button onClick={() => openURL('./html/aa-go.html')} className="link">Ann Arbor Go!</button></li>
                    <li><button onClick={() => openURL('./html/cse-simulator.html')} className="link">Computer Lab Simulator</button></li>
                  </div>
    
                  <hr style={{ width: '100%' }} />
                  <button className="link dropbtn" data-target="wolverinesoft-dropdown">WolverineSoft</button>
                  <div id="wolverinesoft-dropdown" className="link-group">
                    <button onClick={() => openURL('./html/drift.html')} className="link">Curse of the Corsair</button>
                    <button onClick={() => openURL('./html/circuitry.html')} className="link">Circuitry</button>
                  </div>
    
                  <hr style={{ width: '100%' }} />
                  <button className="link dropbtn" data-target="game-proj-dropdown">Games</button>
                  <div id="game-proj-dropdown" className="link-group">
                    <button onClick={() => openURL('./html/simpleECS.html')} className="link">SimpleECS</button>
                    <button onClick={() => openURL('./html/otvl.html')} className="link">OTVL/AppStop</button>
                    <button onClick={() => openURL('./html/desktopDefenders.html')} className="link">Desktop Defender</button>
                    <button onClick={() => openURL('./html/qube.html')} className="link">QUBE</button>
                    <button onClick={() => openURL('./html/494-metroid.html')} className="link">Gravity Metroid</button>
                    <button onClick={() => openURL('./html/warpball.html')} className="link">Warpball</button>
                  </div>
    
                  <hr style={{ width: '100%' }} />
                  <button className="link dropbtn" data-target="academic-dropdown">Assorted</button>
                  <div id="academic-dropdown" className="link-group">
                    <button onClick={() => openURL('./html/insta485-demo.html')} className="link">Insta485</button>
                    <div className="link-external">
                      <a href="https://devpost.com/software/tehuantepec" style={{ cursor: 'default' }}>YHacks 2019</a>
                    </div>
                    <button onClick={() => openURL('./html/mrads-semiconductor.html')} className="link">Nanomaterial Semiconductor research</button>
                  </div>
                  <hr style={{ width: '100%' }} />
                </nav>
              </div>
    
              <div id="contact-links">
                <a href="https://www.linkedin.com/in/kewei-han/">
                  <img src="./files/icons/linkedin.svg" className="contact-icon" alt="LinkedIn" />
                </a>
                <a href="https://github.com/keweihan">
                  <img src="./files/icons/github.svg" className="contact-icon" alt="GitHub" />
                </a>
                <a href="mailto:keweihan@andrew.cmu.edu">
                  <img src="./files/icons/envelope-alt.svg" className="contact-icon" alt="Email" />
                </a>
              </div>
            </div>
            <div id="settings">
              <button className="setting-button" onClick={toggleDarkMode}>
                <img src="./files/icons/dark-mode.svg" className="settings-icon" alt="Dark Mode" />
              </button>
              <button className="setting-button" onClick={toggleSkin}>
                <img src="./files/icons/brush-alt.svg" className="settings-icon" alt="Toggle Skin" />
              </button>
            </div>
          </div>
          <div id="browser-wrapper">
            {/* JavaScript inserted iframe with id #browser */}
          </div>
        </div>
      </div>
    );
    
  }
  
  export default App;