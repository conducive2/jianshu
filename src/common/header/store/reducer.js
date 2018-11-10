const defaultState={
    focused:false,
}
export default (state=defaultState,action)=>{
    if(action.type==='hander_item'){
        return{
            focused:true
        }
    }
    if(action.type==='add_item'){
        return{
            focused:false
        }
    }
    return state
}