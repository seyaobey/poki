/// <reference path="../../node_modules/@types/backendless/index.d.ts" />
import * as React from 'react';
import { Component } from 'react';
import { Container, Header, Title, Content, InputGroup, Input, Grid, Col, Card, CardItem, Button, Icon } from 'native-base';
import Backendless from 'backendless';
import BusyIndicator from 'react-native-busy-indicator';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';
export class LoginPage extends Component {
    render() {
        var that = this;
        return (React.createElement(Container, null, 
            React.createElement(Header, null, 
                React.createElement(Title, null, "Poki")
            ), 
            React.createElement(Content, {contentContainerStyle: { flex: 1 }, style: { padding: 20 }}, 
                React.createElement(Grid, {style: { alignItems: 'center' }}, 
                    React.createElement(Col, null, 
                        React.createElement(Card, null, 
                            React.createElement(CardItem, null, 
                                React.createElement(InputGroup, null, 
                                    React.createElement(Icon, {name: "ios-person", style: { color: '#0A69FE' }}), 
                                    React.createElement(Input, {placeholder: "Email", onChange: (e) => { that.txt_email = e.nativeEvent.text; }})), 
                                React.createElement(InputGroup, null, 
                                    React.createElement(Icon, {name: "ios-unlock", style: { color: '#0A69FE' }}), 
                                    React.createElement(Input, {placeholder: "Password", secureTextEntry: true, onChange: (e) => { that.txt_password = e.nativeEvent.text; }})), 
                                React.createElement(Button, {block: true, bordered: true, warning: true, style: { marginTop: 40 }, onPress: this.login.bind(this)}, " Login "), 
                                React.createElement(Button, {block: true, bordered: true, success: true, style: { marginTop: 15 }, onPress: this.signup.bind(this)}, " Sign up ")), 
                            React.createElement(BusyIndicator, null))
                    )
                ), 
                React.createElement(BusyIndicator, {overlayHeight: 25}))));
    }
    login() {
        loaderHandler.showLoader("Loading");
        Backendless.UserService.login(this.txt_email, this.txt_password, true, new Backendless.Async(succ => {
            loaderHandler.hideLoader();
            this.props.owner['onLogin']();
        }, err => {
            loaderHandler.hideLoader();
            alert('Login failure' + JSON.stringify(err));
        }));
    }
    signup() {
        var usr = new Backendless.User();
        usr.email = this.txt_email;
        usr.password = this.txt_password;
        Backendless.UserService.register(usr, new Backendless.Async((succ) => {
            alert('User has been registered');
        }, (err) => {
            alert(JSON.stringify(err));
        }));
    }
}
//# sourceMappingURL=loginpage.js.map