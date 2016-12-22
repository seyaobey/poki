/// <reference path="../../node_modules/@types/backendless/index.d.ts" />


import * as React from 'react';
import { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Container, Header, Title, Spinner,
Content, InputGroup, Input, Grid, Col, 
Card, CardItem, Button, Icon } from 'native-base';
import * as RN from 'native-base';

import Backendless from 'backendless'; 
import BusyIndicator from 'react-native-busy-indicator';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';

import Modal from 'react-native-simple-modal';


<<<<<<< HEAD
interface LoginPageState {
    loading: boolean
}
export interface LoginPageProps extends React.Props<any>{
   owner: Component<any,any>
=======
export interface LoginPageProps extends React.Props<any>{
    owner: Component<any,any>
>>>>>>> e0c0b89850170cef71959c505cf36230f8632d06
}
export class LoginPage extends Component<any, any>{
  
    props:LoginPageProps;

    state: LoginPageState;
    props: LoginPageProps;

 
    constructor(props?: any){
        super(props);
        this.state = {
           loading : false
        }
    }

<<<<<<< HEAD

    render(){
=======
        var that = this;
>>>>>>> e0c0b89850170cef71959c505cf36230f8632d06

        var that = this;
        
        return(
            <Container >

                <Header>
                    <Title>Poki</Title>
                </Header>

                <Content contentContainerStyle={{flex: 2}} style={{padding: 20}}>

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

<<<<<<< HEAD
                                <Modal            
                                     open={this.state.loading}
                                     modalDidOpen={() => console.log('modal did open')}
                                     modalDidClose={() => this.setState({open: false})}
                                     style={{alignItems: 'center'}}>
                                       <View>
                                         <Spinner />
                                         <Text style={{fontSize: 20, textAlign:'center'}}>Logging, please wait...</Text>                  
                                       </View>
                                 </Modal>
=======
                                <BusyIndicator />
>>>>>>> e0c0b89850170cef71959c505cf36230f8632d06

                            </Card>



                        </Col>

                    </Grid>

<<<<<<< HEAD
                    
=======
                    <BusyIndicator overlayHeight={25} />
>>>>>>> e0c0b89850170cef71959c505cf36230f8632d06

                </Content>

            </Container>
        );
    }


    private txt_email:any;
    private txt_password:any


    private login(){
<<<<<<< HEAD

        this.setState({
            loading: true
        }, ()=>{

          try{

            Backendless.UserService.login(this.txt_email, this.txt_password, true, new Backendless.Async(succ =>{

                alert(JSON.stringify(succ));

                this.setState({
                     loading : false
                 });

                 this.props.owner['onLogin']();


             }, err =>{

                 this.setState({
                     loading : false
                 });

                 alert('Failed to login. Error: ' + JSON.stringify(err));

             }));

            }catch(e){

                 this.setState({
                     loading : false
                 });
                 alert('Failed to login. Error: ' + JSON.stringify(e));
            }


        });
        
    }
=======
        
        loaderHandler.showLoader("Loading");

        Backendless.UserService.login(this.txt_email, this.txt_password, true, new Backendless.Async( succ =>{
>>>>>>> e0c0b89850170cef71959c505cf36230f8632d06

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

var center = StyleSheet.create({

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center :{    
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