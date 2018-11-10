import styled from 'styled-components'
import logopic from '../../img/logo.png'
export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
    width:100%;
    margin:0 auto;
`
export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logopic});
    background-size:cover;
`
export const Var = styled.div`
    margin:0 auto;
    width:75%;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
`
export const NavItem = styled.div`
line-height:56px;
padding:0 15px;
font-size:16px;
color:#333;
&.left{
    float:left;
}
&.right{
    float:right;
    color:#969696;
}
&.active{
    color:#ea6f5a;
}
`
export const SeaverWai =styled.div`
    float:left;
    position:relative;
    .slide-enter{
        transition:all .3s ease-out;
    }
    .slide-enter-active{
        width:240px;
    }
    .slide-exit{
        transition:all .3s ease-out;
    }
    .slide-exit-active{
        width:160px;
    }
    .iconfont{
        position:absolute;
        margin:9px 0;
        right:23px;
        bottom: 5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
        background-color:#969696;
        color: #ffffff;
    }
    }
`
export const Seaver=styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    margin:9px 20px;
    padding:0 35px 0 20px;
    border:none;
    outline:none;
    border-radius:19px; 
    box-sizing:border-box;                                                                                                                                                                                                                                                                                                                                                                                                                     
    background:#eee;
    font-size:14px;
    color: #666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
`
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.button`
    float:right;
    margin:9px 5px 0 15px;
    height:38px;
    background-color:transparent;
    color:#ea6f5a;
    line-height:24px;
    width:80px;
    border:1px solid rgba(236,97,73,.7);
    border-radius:20px;
    font-size:15px;
    &.writing{
        color:#fff;
        background:#ec6149;
    }
`
