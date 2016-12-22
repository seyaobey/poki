import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Title, Spinner, Content, InputGroup, Input, Grid, Col, Card, CardItem, Button, Icon } from 'native-base';
import Backendless from 'backendless';
import Modal from 'react-native-simple-modal';
export class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }
    render() {
        var that = this;
        return (React.createElement(Container, null,
            React.createElement(Header, null,
                React.createElement(Title, null, "Poki")),
            React.createElement(Content, { contentContainerStyle: { flex: 2 }, style: { padding: 20 } },
                React.createElement(Grid, { style: { alignItems: 'center' } },
                    React.createElement(Col, null,
                        React.createElement(Card, null,
                            React.createElement(CardItem, null,
                                React.createElement(InputGroup, null,
                                    React.createElement(Icon, { name: "ios-person", style: { color: '#0A69FE' } }),
                                    React.createElement(Input, { placeholder: "Email", onChange: (e) => { that.txt_email = e.nativeEvent.text; } })),
                                React.createElement(InputGroup, null,
                                    React.createElement(Icon, { name: "ios-unlock", style: { color: '#0A69FE' } }),
                                    React.createElement(Input, { placeholder: "Password", secureTextEntry: true, onChange: (e) => { that.txt_password = e.nativeEvent.text; } })),
                                React.createElement(Button, { block: true, bordered: true, warning: true, style: { marginTop: 40 }, onPress: this.login.bind(this) }, " Login "),
                                React.createElement(Button, { block: true, bordered: true, success: true, style: { marginTop: 15 }, onPress: this.signup.bind(this) }, " Sign up ")),
                            React.createElement(Modal, { open: this.state.loading, modalDidOpen: () => console.log('modal did open'), modalDidClose: () => this.setState({ open: false }), style: { alignItems: 'center' } },
                                React.createElement(View, null,
                                    React.createElement(Spinner, null),
                                    React.createElement(Text, { style: { fontSize: 20, textAlign: 'center' } }, "Logging, please wait...")))))))));
    }
    login() {
        this.setState({
            loading: true
        }, () => {
            try {
                Backendless.UserService.login(this.txt_email, this.txt_password, true, new Backendless.Async(succ => {
                    alert(JSON.stringify(succ));
                    this.setState({
                        loading: false
                    });
                    this.props.owner['onLogin']();
                }, err => {
                    this.setState({
                        loading: false
                    });
                    alert('Failed to login. Error: ' + JSON.stringify(err));
                }));
            }
            catch (e) {
                this.setState({
                    loading: false
                });
                alert('Failed to login. Error: ' + JSON.stringify(e));
            }
        });
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
var center = StyleSheet.create({});
var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        textAlign: 'center',
    },
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.8)'
    },
    modal: {
        backgroundColor: 'rgba(0,0,0,.8)'
    }
});
//# sourceMappingURL=loginpage.js.map