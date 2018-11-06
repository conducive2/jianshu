import React from 'react'
import {HeaderWrapper,
Logo,
Var,
NavItem,
Seaver
} from './style'
export default class Haeder extends React.Component{
    render(){
        return(
            <HeaderWrapper>
                <Logo href='/'/>
                <Var>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <Seaver></Seaver>
                </Var>
            </HeaderWrapper>
        )
    }
}