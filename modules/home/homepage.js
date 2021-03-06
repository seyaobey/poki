import * as React from 'react';
import { Component } from 'react';
import { Header, Title, Content, Drawer, Button, Icon } from 'native-base';
import { LoginPage } from '../login/loginpage';
import Backendless from 'backendless';
var Btn = Button;
export class HomePage extends Component {
    get user_logged_in() {
        return Backendless.UserService.loggedInUser() != undefined;
    }
    render() {
        if (!this.user_logged_in) {
<<<<<<< HEAD
            return (React.createElement(LoginPage, { owner: this }));
=======
            return (React.createElement(LoginPage, {owner: this}));
>>>>>>> e0c0b89850170cef71959c505cf36230f8632d06
        }
        else {
            return (React.createElement(Drawer, {ref: (ref) => { this._drawer = ref; }, type: "displace", tapToClose: true, acceptPan: false, openDrawerOffset: 0.2, panCloseMask: 0.2, tweenHandler: (ratio) => {
                return {
                    drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
                    main: {
                        opacity: (2 - ratio) / 2,
                    },
                };
            }, negotiatePan: true, content: React.createElement(AppMenu, null)}, 
                React.createElement(AppHeader, {owner: this})
            ));
        }
    }
    onLogin() {
        this.forceUpdate();
    }
    toggle_drawer(open) {
        if (open) {
            this._drawer.open();
        }
        else {
            this._drawer.close();
        }
    }
    onLogin() {
        this.setState({
            reload: true
        }, () => {
            this.state.reload = false;
        });
    }
}
class AppMenu extends Component {
    render() {
        return (React.createElement(Content, null, 
            React.createElement(Header, null, 
                React.createElement(Title, null, "Application Menu")
            )
        ));
    }
}
class AppHeader extends Component {
    render() {
        return (React.createElement(Header, null, 
            React.createElement(Btn, {transparent: true, ref: "btn", onPress: this.btn_pressed.bind(this)}, 
                React.createElement(Icon, {name: 'ios-menu'})
            ), 
            React.createElement(Title, null, "Poki")));
    }
    btn_pressed() {
        this._is_opened = !this._is_opened;
        this.props.owner.toggle_drawer(this._is_opened);
    }
}
//# sourceMappingURL=homepage.js.map