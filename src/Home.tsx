import React, { useContext } from 'react';
import { UserContext } from './components/UserContext';

const Home = () => {
    //const user = useContext(UserContext);

    return <h2>Welcome home {'user' || '???'}!</h2>;
};

export default Home;
