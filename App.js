import React from 'react'
import { Globalstyle } from './style'
import Header from './common/header'
import { Globalstyle2} from '../src/img/iconfont/iconfont'
class App extends React.Component {
    render(){
        return(<div>
                <Globalstyle/>
                <Globalstyle2/>
                <Header/>
                </div>)
    }
}

export default App