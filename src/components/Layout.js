import React from 'react';
import Header from './Header';

const Layout = ({ children }) => (

    <div style={{ margin: `0 auto`,  padding: `0 1rem` }}>
        <Header></Header>
        {children}
    </div>
)


export default Layout
