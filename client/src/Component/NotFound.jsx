// NotFound.jsx
import React from 'react';

const notfound = '../Assets/Images/NotFound.jpg';

const NotFound = () => {
    return (
        <img src={notfound} alt="Not Found" style={{ width: '30%', margin: '80px 0 0 35%' }} />
    );
}

export default NotFound;
