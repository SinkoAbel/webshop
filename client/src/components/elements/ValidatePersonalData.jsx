import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const ValidatePersonalData = (props) => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={props.previousPhase}>Vissza</button>
        </div>
    );
};

export default ValidatePersonalData;
