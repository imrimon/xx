import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '70%' }} src={notfound} alt="" />
            <h1>OOPS, THE PAGE IS NOT EXIST!</h1>
            <Link to="/"><button>Please Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;