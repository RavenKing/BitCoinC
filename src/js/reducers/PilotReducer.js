export default function Pilot (
  state = {
   Pilot:null,
   Documents:[],
   role:"",
   status:"INIT",
   activeworkflow:"",
   display:[],
   Workflows:[],
   Courses:[],
   Companys:[],
   Levels:{},
   updateFlightNew:[],
   message:[],
   LevelInfo:{},
   documentId:"",
   courseList:{}
  }, action
) {
  switch (action.type) {

    case "FETCH_LEVEL_INFO":{
      return {...state,LevelInfo:action.payload}
    }
    case "Add_Card_To_Display":{

    const displayarray = state.display;
    const {payload} = action ; 
    payload.status = state.status;
    payload.cardid = (new Date().getTime()+ Math.floor(Math.random() * 999999)).toString(31);
    displayarray.push(payload)
    const documentId = payload.documentId;
    return {...state,display:displayarray,documentId:documentId}
    }
    case "FETCH_PILOT_INFO":{
      return {...state,Pilot:action.payload}
    }


    case "UPDATE_PILOT_DATA":{
      return {...state,Pilot:action.payload}
    }

    case "FETCH_MESSAGE":{
      return {...state,message:action.payload}
    }

    case "UPDATE_MESSAGE":{
      console.log(action.payload);

      const message_id = action.payload.message_id;
      var newMessage = []
       state.message.filter((mes)=>{
        if(mes.message_id == message_id)
        {
  
            newMessage.push(action.payload)
            return;
        }
          newMessage.push(mes)

      })
      console.log(newMessage)
      return {...state,message:newMessage}
    }

 /*   case "UPDATE_MESSAGE1":{

      const message_id = action.payload.message_id;
      const status = action.payload.status;
      var newMessage = state.message.filter((mes,i)=>{
        if(mes.message_id == message_id)
        {
          mes.status = status;
        }
        return mes;

      })
      return {...state,message:newMessage}
    }

    case "UPDATE_MESSAGE2":{

      const message_id = action.payload.message_id;
      const description = action.payload.description;
      var newMessage = state.message.filter((mes,i)=>{
        if(mes.message_id == message_id)
        {
          mes.description = description;
        }
        return mes;

      })
      return {...state,message:newMessage}
    }
*/


    case "UPDATE_DOCUMENT":
    {
      const steps = action.payload.steps;
      const documentId = action.payload.documentId;
      var documents = state.Documents;
      documents.map((document,i)=>{
        if(document.documentId == documentId)
          document.steps = steps;
      })
      return {...state,Documents:documents};
    }

    case "UPDATE_DOCUMENT1":
    {
      const status = action.payload.status;
      const documentId = action.payload.documentId;
      var documents = state.Documents;
      documents.map((document,i)=>{
        if(document.documentId == documentId)
          document.status = status;
      })
      return {...state,Documents:documents};
    }

    case "CHANGE_TO_MODIFY":{
      return {...state,status:"MODIFY",activeworkflow:action.payload}
    }
    case "UPDATE_PILOT_FLIGHT":{
      return{...state}

    }
  
    case "DELETE_WORKFLOW_FORM":{
    const targetdata = action.payload;
    const NewWorkflows = state.Workflows.filter((workflow)=>{if(workflow.workflow_id != targetdata) return workflow;  })
      return {...state,Workflows:NewWorkflows}
    }
    

    case "Remove_Card":
    {
      var payload = action.payload;

       var displayarray=state.display;
    var newdata =   displayarray.filter((displayone)=>{return displayone.cardid != payload.cardid})

      return {...state,display:newdata}
    }
          
  //create company
  case "GET_COMPANY_ALL":{

    return {...state,Companys:action.payload}
  }
  case "CREATE_COMPANY":
  {
    const {Companys} = state;
    Companys.push(action.payload)
    return {...state};

  }
  case "EDIT_COMPANY":
  {
    const targetdata = action.payload;
    const newCompanys = state.Companys.filter((company)=>{
      if(company.company_id == targetdata.company_id)
      {
        company.company_name=targetdata.company_name;
        company.address=targetdata.address;
        company.departments = targetdata.departments;
      }
      return company;
    })
      return {...state,Companys:newCompanys}
  }
   case "DELETE_COMPANY":{
    const targetdata = action.payload;
    const newCompanys = state.Companys.filter((company)=>{if(company.company_id != targetdata.company_id) return company;  })
      return {...state,Companys:newCompanys}
    }
//couses reducer

case "GETING_TARGET_COURCE":{
 return {...state,courseList:action.payload}
}


case "FETCH_COURSES_ALL":{
        

    return {...state,Courses:action.payload}

            }

    case "CREATE_COURSE":{
                const coursedata=state.Courses;

                    coursedata.push(action.payload);

              return {...state,Courses:coursedata}
            }

            case "EDIT_COURSE":{
                let values = action.payload;
                let newcourse=state.Courses.filter((course)=>{
                if(course.course_id == values.course_id)
                {
              
                    course.course_id   = values.course_id;
                    course.title = values.title;
                    course.description = values.description;
                    course.category = values.category;
                    course.attachments = values.attachments;
                }
                return course
          })
        return {...state,Courses:newcourse};

            }

    case "DELETE_COURSE":{
          
    const {target} = action.payload;
    console.log(target);
    let newCourses = state.Courses.filter((course)=>{if(course.course_id != target.course_id) return course;  })
      return {...state,Courses:newCourses}


        }


    //end of courses
    case "ADD_COURSE_TO_STEP":
    {
      var courseTitle = action.payload;
      var workflowid = action.payload1;
      var stepSequence = action.payload2;
      var courseid = action.payload3;
      var newworkflows = state.Workflows;
      newworkflows.filter((workflow,i)=>{
        if(workflow.workflow_id == workflowid)
        {
          var steps = workflow.steps;
          steps.filter((step,j)=>{
            if(step.sequence == stepSequence)
            {
              var courses = step.courses;
              var start;
              if(courses.length == 0)
                start = 0;
              else
                start = courses.length-1;
              courses.splice(start,0,{course_id:courseid,sequence:j+1})
            }
          });
        }
      })
      return{...state,Workflows:newworkflows};
    }

    case "CHANGE_STEP_SEQUENCE":
    {
      var steps = action.payload;
      steps.map((step,i)=> {
        step.sequence = i+1;
      });
      var workflowid = action.payload1;
      var newworkflows = state.Workflows;
      newworkflows.filter((workflow,i)=>{
        if(workflow.workflow_id == workflowid)
          workflow.steps = steps;
      })
      return{...state,Workflows:newworkflows};
    }

    case "DELETE_COURSE_FROM_STEP":
    {

      var workflowid = action.payload;
      var stepSequence = action.payload1;
      var courseid = action.payload2;
      var newworkflows = state.Workflows;
      newworkflows.filter((workflow,i)=>{
        if(workflow.workflow_id == workflowid)
        {
          var steps = workflow.steps;
          steps.filter((step,j)=>{
            if(step.sequence == stepSequence)
            {
              var courses = step.courses;
              courses.map((course,k)=>{
                if(course.course_id == courseid)
                {
                  courses.splice(k,1);
                }
              })
            }
          });
        }
      })
      return{...state,Workflows:newworkflows};
    }

    case "SAVE_STEPS_SEQUENCE":
    {
      var currentWorkflow = action.currentWorkflow;
      var steps = action.steps;
      var Workflows = state.Workflows;
      for(let i = 0;i< Workflows.length;i++)
      {
        if(Workflows[i]['workflow_id'] == currentWorkflow)
        {
          Workflows[i]['steps']=steps;
        }
      }
      return {...state,Workflows:Workflows,status:"INIT"}
    }

    case "ADD_NEW_WORK_FLOW":
    {
      var newworkflow = action.payload;
      var workflows = state.Workflows;
      workflows.push(newworkflow);
      console.log("workflows are",workflows);
      return{...state,Workflows:workflows};

    }
    case "INITIAL_WORKFLOWS":
    {
      var initialWorkflows = action.payload;
      return {...state,Workflows:initialWorkflows}
    }

    case "DELETE_STEP_FROM_WORKFLOW":
    {
      var workflowid = action.payload;
      var stepSequence = action.payload1;
      var newworkflows = state.Workflows;
      newworkflows.filter((workflow,i)=>{
        if(workflow.workflow_id == workflowid)
        {
          var steps = workflow.steps;
          steps.filter((step,j)=>{
            if(step.sequence == stepSequence)
            {
              steps.splice(j,1);
            }
          });
        }
      });
      return{...state,Workflows:newworkflows};
    }
    case "ADD_NEW_STEP":
      {
        var stepName = action.payload;
        var workflowid = action.payload1;
        var newworkflows = state.Workflows;
        newworkflows.map((workflow,i)=>{
        if(workflow.workflow_id == workflowid)
        {
          var length = workflow.steps.length+1;
          workflow.steps.push({sequence:length,courses:[],name:stepName});
        }
        });
        return{...state,Workflows:newworkflows}; 
       
      }
       //level Reducer
        case "GET_LEVELS":
        {
          return {...state,Levels:action.payload}
        }
          case "UPSERT_LEVEL":
          {

            return {...state,Levels:action.payload.updatepart}

          }
        case "CHANGE_WORKFLOW":
        {
          const targetdata = action.payload;
     const newworkflows = state.Workflows.filter((workflow)=>{
      if(workflow.workflow_id == targetdata.workflow_id)
      {
        workflow.title = targetdata.title;
        workflow.workflow_id = targetdata.workflow_id;
        workflow.conditions = targetdata.conditions;
        workflow.previous_level = targetdata.previous_level;
        workflow.target_level = targetdata.target_level;
        workflow.description = targetdata.description;
      }
      return workflow;
    })
      return {...state,Workflows:newworkflows}
        }
        case "GET_USER_DOCUMENTS":
        {
          return {...state,Documents:action.payload}

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