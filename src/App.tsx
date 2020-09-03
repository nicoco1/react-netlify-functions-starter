import React from 'react';
import logo from './logo.svg';
import './App.css';
import netlifyIdentity from 'netlify-identity-widget';

netlifyIdentity.init({});

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>

                <button
                    onClick={() => {
                        netlifyIdentity.open();
                    }}
                >
                    Log in
                </button>
            </header>
        </div>
    );
}

export default App;
