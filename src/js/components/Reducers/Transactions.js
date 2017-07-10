export default function Transaction (
  state = {
   status:"Cool",
   BitData:[],
   DetailData:[],
   SystemData:[]
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
     case "SYS_DATA":
      {
        return {...state,SystemData:action.payload}


      }
    default:{
      return {...state}
    }
  }

 


}