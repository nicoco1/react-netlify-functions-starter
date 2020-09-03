import React, { useEffect, useState, useImperativeHandle } from 'react';
import logo from './logo.svg';
import './App.css';
import netlifyIdentity from 'netlify-identity-widget';
import { setupMaster } from 'cluster';

const App = () => {
    const [user, setUser] = useState<netlifyIdentity.User | null>();

    useEffect(() => {
        netlifyIdentity.init({});
        setUser(netlifyIdentity.currentUser());

        netlifyIdentity.on('login', user => {
            setUser(user);
            netlifyIdentity.close();
        });
        netlifyIdentity.on('logout', () => {
            setUser(null);
            netlifyIdentity.close();
        });
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>

                {!user && <p>Please login!</p>}
                {user && (
                    <p>
                        Hello, <strong>{user.user_metadata.full_name}</strong>
                    </p>
                )}

                {!user && (
                    <button
                        onClick={() => {
                            netlifyIdentity.open();
                        }}
                    >
                        Log in
                    </button>
                )}

                {user && (
                    <button
                        onClick={() => {
                            netlifyIdentity.logout();
                        }}
                    >
                        Log out
                    </button>
                )}
                {user && (
                    <button
                        onClick={() => {
                            console.log(netlifyIdentity.currentUser());
                        }}
                    >
                        Me
                    </button>
                )}
            </header>
        </div>
    );
};

export default App;
