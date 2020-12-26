import React from 'react';
import { Link } from 'react-router-dom'

class Complete extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>환영합니다. {this.props.name}님!</h1>
                </div>
                <div>
                    <p>ID : {this.props.id}</p>
                    <p>Email : {this.props.email}</p>
                    <p>JoinTime : {this.props.joinTime}</p>
                </div>
                <Link to='/'><button>시작하기</button></Link>
            </div>
        )
    }
}

export default Complete;