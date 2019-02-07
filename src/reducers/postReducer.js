//reducer alawys has to return something instead of undefined 
export default (state=[], action) => {
    switch(action.type){
        case 'FETCH_POSTS':
         return action.payload;
        default:
         return state;
    }
}