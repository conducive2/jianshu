import React from 'react'
import {connect} from 'react-redux'
import {HeaderWrapper,
Logo,
Var,
NavItem,
Seaver,
Addition,
Button,
SeaverWai
} from './style'
import {CSSTransition} from 'react-transition-group'
 class Haeder extends React.Component{
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
                    <CSSTransition
                        in={this.props.focused}
                        timeout={300}
                        classNames='slide'
                    >
                        <Seaver
                            className={this.props.focused? 'focused':''}
                            onFocus={this.props.handleInputFocus}
                            onBlur={this.props.handleInputBlur}
                        ></Seaver>
                    </CSSTransition>
                            <i className={this.props.focused? 'focused iconfont':'iconfont'}>&#xe623;</i>
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
const mapStateToProps=(state)=>{
    return{
        focused:state.header.focused
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleInputFocus(){
            const action= {
                type:'hander_item',
            }
            dispatch(action)
        },
        handleInputBlur(){
            const action={
                type:'add_item'
            }
            dispatch(action)
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Haeder)