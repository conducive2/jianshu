import React from 'react'
import {HeaderWrapper,
Logo,
Var,
NavItem,
Seaver,
Addition,
Button,
SeaverWai
} from './style'
export default class Haeder extends React.Component{
    render(){
        return(
            <HeaderWrapper>
                <Logo href='/'/>
                <Var>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <SeaverWai>
                        <Seaver></Seaver>
                        <i className="iconfont">&#xe623;</i>
                    </SeaverWai>
                </Var>
                <Addition>
                    <Button className='writing'>
                    <i className="iconfont">&#xe608;</i>
                    写文章
                    </Button>
                    <Button>注册</Button>
                </Addition>
            </HeaderWrapper>

        )
    }
}