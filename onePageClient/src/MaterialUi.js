import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import App from './App';
import Sample from './Sample'

class MaterialUi extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        return (
        <MuiThemeProvider>
                <div>
                <AppBar
                    title="OnePage"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.handleToggle}
                    />

                <Sample />
                <App />

                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>

            </div>
        </MuiThemeProvider>
        );
    }
}

export default MaterialUi
