
import * as React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export class AnatomyExample extends Component<any, any> {

render() {
        return (
            <Container> 

                <Header>                
                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>                    
                    <Title>Poki </Title>
                </Header>

                <Content>
                    <Button block success> Login </Button>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button transparent>
                            <Icon name='ios-call' />
                        </Button>  
                    </FooterTab>
                </Footer>

            </Container> 
        );
    }

}