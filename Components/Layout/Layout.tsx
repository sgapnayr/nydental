import React, { Children } from 'react'
import Footer from './Footer'
import Nav from './Nav'

interface Props {
    children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout