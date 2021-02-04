import React from 'react';
import { useParams } from 'react-router-dom';

function C3() {

    let { name } = useParams();
        return (
            <div>
                C3
                <h1>Welcome {name}</h1>
            </div>
        );
    }

export default C3;