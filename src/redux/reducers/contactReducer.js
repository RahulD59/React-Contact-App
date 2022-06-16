const initialState=[
    {
        name:"Rahul",
        id:1,
        number:8879944133,
        city:"Kalyan",
        email:"rahul@gmail.com"

    },
    {
        name:"Hari",
        id:2,
        number:9879844133,
        city:"Mira Road",
        email:"hari@gmail.com"
        
    }
];

const contactReducer=(state=initialState, action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state=[...state, action.payload]
            return state;
        case "EDIT_CONTACT":
            const updateState=state.map(contact=>contact.id === action.payload.id ? action.payload : contact);
            state=updateState;
            return state;
        case "DELETE_CONTACT":
            state=action.payload;
            return state;
        default:
            return state;
    }
};

export default contactReducer;