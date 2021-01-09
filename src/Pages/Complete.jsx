import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
    id: state.form.id,
    pw: state.form.pw,
    name: state.form.name,
    phoneNumber: state.form.phoneNumber,
    email: state.form.email,
    allowAd: state.form.allowAd,
    joinTime: state.form.joinTime
  });

export default connect(mapStateToProps)(Complete);