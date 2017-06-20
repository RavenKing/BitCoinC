import axios from "axios"

export function GetBitData()
{
return dispatch=>{

    axios.get("http://api.huobi.com/staticmarket/detail_ltc_json.js",
                      {headers:{
                      'X-My-Custom-Header': 'Header-Value',
                      'content-type':'application/json'
                      }})
    .then(function(response,error){
      if(response.data)
        {console.log(response);

    dispatch({type:"BIT_DATA",payload:response.data})  
        }
    })
}
}



export function UPDATE_PILOT_DATA_LEVEL(cert_id,pilot_data)
{

  var data={

    "target":{"cert_id":cert_id},
    "updatepart":pilot_data
  }
   return dispatch=>{
axios.put("/api/pilots",{
       data:data,
       headers:{
        'X-My-Custom-Header': 'Header-Value',
        'content-type':'application/json'
        }
    })
    .then(function (response,err) {
     })
   }
}

export function DeleteDocument(data)
{

   return dispatch=>{




        axios.delete("/api/message",{
                      data:{target:{documentId:data.documentId}},
                      headers:{
                      'X-My-Custom-Header': 'Header-Value',
                      'content-type':'application/json'
                      }
    })
    .then(function(){
    dispatch({type:"DELETE_DOCUMENT",payload:data})  

    })


    axios.delete("/api/documents",{
                      data:{documentId:data.documentId},
                      headers:{
                      'X-My-Custom-Header': 'Header-Value',
                      'content-type':'application/json'
                      }
    })
    .then(function(){
    dispatch({type:"DELETE_DOCUMENT",payload:data})  

    })
  }
}