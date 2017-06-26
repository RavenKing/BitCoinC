export default function Transaction (
  state = {
   status:"Cool",
   BitData:[],
   DetailData:[]
  }, action
) {
  switch (action.type) {

    case "BIT_DATA":{
      return {...state,BitData:action.payload}
    }
    case "DETAIL_DATA":
    {
      return {...state,DetailData:action.payload}
    }
        case "CREATE_DOCUMENT":
        {
          const {Documents} = state;
          Documents.push(action.payload)
          return {...state,Documents:Documents}
        }

    default:{
      return {...state,status:"INIT"}
    }
  }

 


}