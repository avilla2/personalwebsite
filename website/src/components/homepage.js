import React from 'react';
import MyNav from './navbar'
import Intro from './intro'
import About from './about'
import Experience from './experience'
import Links from './links'
import Footer from './footer'

class Home extends React.Component {
    render() {
        return (
            <div>
                <MyNav />
                <Intro />
                <About />
                <Experience />
                <Links />
                <Footer />
            </div>
        )
    }
}

export default Home;