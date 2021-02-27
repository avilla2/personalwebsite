import React from 'react';
import MyNav from './navbar'
import Intro from './intro'
import About from './about'

class Home extends React.Component {
    render() {
        return (
            <div>
                <MyNav />
                <Intro />
                <About />
            </div>
        )
    }
}

export default Home;