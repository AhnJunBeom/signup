import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {RootState} from '../Reducers';

function Complete() {
    let history = useHistory();
    const { id, name, email, joinTime } = useSelector((state: RootState) => state.form);

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