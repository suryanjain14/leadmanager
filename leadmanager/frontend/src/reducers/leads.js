import {Get_LEADS} from "../actions/types"

const initialstate ={
    leads:[]
}

export default function (state = initialstate,action)  {
switch (action.type) {

    case Get_LEADS:
        return{
            ...state,
            leads: action.payload
        };
    default:
        return state;

}
}