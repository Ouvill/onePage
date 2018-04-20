import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class Sample extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
        }
    }

    handleClick() {
        fetch('/api/helloworld', {
            accept: 'application/json',
        }).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
        })
    }

    render() {
        return (
            <div className="Sample" >
                <FlatButton onClick={this.handleClick}>サンプル</FlatButton>
            </div>
        );
    }
}
export default Sample;
