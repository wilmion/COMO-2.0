import React from 'react';
import Footer from '../components/perpetual/Footer';
import Header from '../components/perpetual/Header';

const Layout = props => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
}
export default Layout;