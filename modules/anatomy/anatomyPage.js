import * as React from 'react';
import { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export class AnatomyExample extends Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, null,
                React.createElement(Button, { transparent: true },
                    React.createElement(Icon, { name: 'ios-menu' })),
                React.createElement(Title, null, "Poki ")),
            React.createElement(Content, null,
                React.createElement(Button, { block: true, success: true }, " Login ")),
            React.createElement(Footer, null,
                React.createElement(FooterTab, null,
                    React.createElement(Button, { transparent: true },
                        React.createElement(Icon, { name: 'ios-call' }))))));
    }
}
//# sourceMappingURL=anatomyPage.js.map