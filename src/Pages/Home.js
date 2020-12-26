import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <Link to='/join'>회원가입</Link>
        )
    }
}

export default Home;