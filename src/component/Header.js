import React from 'react';
import {Link} from 'react-router-dom';
import BaseButton from './BaseButton';

const Header = () => {
    return(
        <header>
          <div>

                <Link to="/">News Forum</Link>
            </div>
        </header>
    )
}

export default Header;
