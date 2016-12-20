/// <reference path="../../node_modules/@types/backendless/index.d.ts" />


import * as React from 'react';
import { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import { Container, Header, Title, 
Content, InputGroup, Input, Grid, Col,
Card, CardItem, Button, Icon } from 'native-base';

import Backendless from 'backendless'; 
import BusyIndicator from 'react-native-busy-indicator';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';



export interface LoginPageProps extends React.Props<any>{
    owner: Component<any,any>
}
export class LoginPage extends Component<any, any>{
  
    props:LoginPageProps;


    render(){

        var that = this;

        return(
            <Container >

                <Header>
                    <Title>Poki</Title>
                </Header>

                <Content contentContainerStyle={{flex: 1}} style={{padding: 20}}>

                    <Grid style={{alignItems: 'center'}}>

                        <Col>

                            <Card>

                                <CardItem>

                                    <InputGroup>
                                        <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                                        <Input placeholder="Email" 
                                          onChange={(e:any) => {that.txt_email = e.nativeEvent.text}} />
                                    </InputGroup>


                                    <InputGroup>
                                        <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                        <Input placeholder="Password" secureTextEntry 
                                          onChange={(e:any) => {that.txt_password = e.nativeEvent.text}} />
                                    </InputGroup>


                                    <Button block bordered warning style={{marginTop:40}} 
                                        onPress={this.login.bind(this)}> Login </Button>

                                    <Button block bordered success style={{marginTop:15}}
                                        onPress={this.signup.bind(this)}> Sign up </Button>


                                </CardItem>

                                <BusyIndicator />

                            </Card>

                        </Col>

                    </Grid>

                    <BusyIndicator overlayHeight={25} />

                </Content>

            </Container>
        );
    }


    private txt_email:any;
    private txt_password:any


    private login(){
        
        loaderHandler.showLoader("Loading");

        Backendless.UserService.login(this.txt_email, this.txt_password, true, new Backendless.Async( succ =>{

            loaderHandler.hideLoader();

            this.props.owner['onLogin']();
            

        }, err =>{

            loaderHandler.hideLoader();

            alert('Login failure' + JSON.stringify(err));
        }));
        

    }
    

    private signup(){    

        var usr = new Backendless.User();
        usr.email = this.txt_email;
        usr.password = this.txt_password;

        Backendless.UserService.register(usr, new Backendless.Async((succ) =>{
            
            alert('User has been registered');

        }, (err)=>{

            alert(JSON.stringify(err));

        }));

    }

}
