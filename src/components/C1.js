import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class C1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            name1: 'Yogesh',
            name2: 'Yogeshwar',
            name3: 'Yogi JI'
        }
    }

    handleClick(event, index) {

        this.setState({ index });
    }

    componentWillMount() {
        this.setState({ index: 2 });
    }

    render() {
        let name;
        name = (this.state.index === 1 ? this.state.name1 : (this.state.index === 2 ? this.state.name2 : this.state.name3));

        return (
            <Fragment>
                <h1>Shitty Peoples everywhere</h1>
                <h2>{name}</h2>
                <button onClick={this.handleClick.bind(this, 1)} > BTN 1 </button>

                <button onClick={this.handleClick.bind(this, 2)} > BTN 2 </button>

                <button onClick={this.handleClick.bind(this, 3)} > BTN 3 </button>
                <br />
                <Link to='/c2'><button> C2</button></Link>
                
            </Fragment>
        );




    }
}
export default C1;