import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Complete(props) {
    let history = useHistory();
    const id = useSelector(state => state.form.id);
    const name = useSelector(state => state.form.name);
    const email = useSelector(state => state.form.email);
    const joinTime = useSelector(state => state.form.joinTime);

    function check() {
        history.push("/");
    }

    return (
        <div>
            <div>
                <h1>환영합니다. {name}님!</h1>
            </div>
            <div>
                <p>ID : {id}</p>
                <p>Email : {email}</p>
                <p>JoinTime : {joinTime}</p>
            </div>
            <button onClick={check}>시작하기</button>
        </div>
    )
};

export default Complete;