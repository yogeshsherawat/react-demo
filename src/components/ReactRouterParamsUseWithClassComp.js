import React from 'react';

class C4 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                C4
                <h1>Welcome {this.props.match.params.name}</h1>
            </div>
        );
    }
}
export default C4;