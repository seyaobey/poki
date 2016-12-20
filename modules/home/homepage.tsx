
import * as React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, 
     Drawer,
    Button, Icon } from 'native-base';
import { LoginPage } from '../login/loginpage'    

import Backendless from 'backendless';    

var Btn:any = Button;


export class HomePage extends Component<any, any>{

    private get user_logged_in():boolean{

        return Backendless.UserService.loggedInUser() != undefined;
    }

    render(){

        if(!this.user_logged_in){

            return (
                <LoginPage owner={this} />
            );
            
        }else{

            return(
                <Drawer
                    ref={(ref) => { this._drawer = ref; }}
                    type="displace"
                    tapToClose
                    acceptPan={false}        
                    openDrawerOffset={0.2}
                    panCloseMask={0.2}
        
                    tweenHandler={(ratio: any) => {  // eslint-disable-line
                        return {
                            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
                            main: {
                            opacity: (2 - ratio) / 2,
                            },
                        };
                    }}
                    negotiatePan                    
                    content={<AppMenu />}>

                    <AppHeader owner={this} />

                </Drawer>
            );

        }

        
    }

    private _drawer:any

    onLogin(){
        this.forceUpdate();
    }


    toggle_drawer(open:boolean){

        if(open){
            this._drawer.open();
        }else{
            this._drawer.close();
        }

    }
}

class AppMenu extends Component<any, any>{

    render(){

        return (
            <Content>
                <Header>
                    <Title>Application Menu</Title>
                </Header>
            </Content>
        );
    }
}


interface AppHeaderProps extends React.Props<any> {
    owner: HomePage
}
class AppHeader extends Component<AppHeaderProps, any>{

    props:AppHeaderProps;

    render(){

        return (
            <Header>

                 <Btn transparent ref="btn" onPress={this.btn_pressed.bind(this)} >
                    <Icon name='ios-menu' />
                 </Btn>

                <Title>Poki</Title>

            </Header>
        );
    }

    private _is_opened:boolean;

    private btn_pressed(){

        this._is_opened = !this._is_opened;

        this.props.owner.toggle_drawer(this._is_opened);

    }


}