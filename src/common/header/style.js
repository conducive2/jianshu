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
export const Seaver=styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    margin-top:9px ;
    padding:0 20px;
    border:none;
    outline:none;
    border-radius:19px; 
    box-sizing:border-box;                                                                                                                                                                                                                                                                                                                                                                                                                     
    background:red;
`