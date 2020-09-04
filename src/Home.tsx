import React from 'react';
// import { UserContext } from './components/UserContext';

const Home = () => {
    //const user = React.useContext(UserContext);

    return <h2>Welcome home {'user' || '???'}!</h2>;
};

export default Home;
