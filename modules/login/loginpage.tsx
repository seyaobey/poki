

import * as React from 'react';
import { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import { Container, Header, Title, 
Content, InputGroup, Input, Grid, Col,
Card, CardItem, Button, Icon } from 'native-base';

import Backendless from 'backendless'; 


export class LoginPage extends Component<any, any>{


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
                                        <Input placeholder="Email" email 
                                          onChange={(e:any) => {that.txt_email = e.nativeEvent.text}} />
                                    </InputGroup>


                                    <InputGroup>
                                        <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                        <Input placeholder="Password" secureTextEntry 
                                          onChange={(e:any) => {that.txt_password = e.nativeEvent.text}} />
                                    </InputGroup>


                                    <Button block warning style={{marginTop:40}} 
                                        onPress={this.login.bind(this)}> Login </Button>

                                    <Button block success style={{marginTop:15}}
                                        onPress={this.signup.bind(this)}> Sign up </Button>


                                </CardItem>

                            </Card>

                        </Col>

                    </Grid>

                </Content>

            </Container>
        );
    }


    private txt_email:any;
    private txt_password:any


    private login(){
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
