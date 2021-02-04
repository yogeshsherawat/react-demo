import React from 'react';
import { Link,Router,Route,useRouteMatch } from 'react-router-dom';
import C3 from './C3';
const C2 = () => {
    // this line below give us the current url of the component
    let match = useRouteMatch();
    console.log(match.url);
    // -------------------

    return (
        <div>
            Component 2<br/>
            <Link to='/'><button>C1</button></Link>
            
            
        </div>
    );
}

export default C2;
