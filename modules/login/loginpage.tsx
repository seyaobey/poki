

import * as React from 'react';
import { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Container, Header, Title, Spinner,
Content, InputGroup, Input, Grid, Col, 
Card, CardItem, Button, Icon } from 'native-base';
import * as RN from 'native-base';

import Backendless from 'backendless'; 

import Modal from 'react-native-simple-modal';


interface LoginPageState {
    loading: boolean
}
export interface LoginPageProps extends React.Props<any>{
   owner: Component<any,any>
}
export class LoginPage extends Component<any, any>{

    state: LoginPageState;
    props: LoginPageProps;

 
    constructor(props?: any){
        super(props);
        this.state = {
           loading : false
        }
    }


    render(){

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