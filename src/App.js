import React from 'react'
import { Globalstyle } from './style'
import Header from './common/header'
import { Globalstyle2} from '../src/img/iconfont/iconfont'
import {Provider} from 'react-redux'
import store from './store/'
export default class App extends React.Component {
 
    render(){
        return(
            <div>
            <Globalstyle/>
            <Globalstyle2/>     
            <Provider store={store}>
                <Header/>
            </Provider>
            </div>
            )
    }
}

