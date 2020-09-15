export default(state=[], action)=>{
    switch(action.type){
        case "FLIGHT_DETAILS_SUCCESS":
            return action.payload
        default:return state
    }
}