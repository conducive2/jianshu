import React from 'react'
import { Globalstyle } from './style'
import Header from './common/header'
class App extends React.Component {
    render(){
        return(<div>
                <Globalstyle/>
                <Header/>
            </div>
        )
    }
}

export default App