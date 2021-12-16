import React from 'react';
import Navbar from '../../../Share/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';



const Header = () => {
    return (
        <div style={{
            background: '#fff8f5', direction: "row", justifyContent: 'center',
        }}>
            <Navbar />
            <HeaderMain />
        </div>
    );
};

export default Header;