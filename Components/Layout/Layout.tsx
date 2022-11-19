import React, { children } from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Layout({ children }): JSX.Element {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout