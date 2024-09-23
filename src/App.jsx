import { useEffect,useState } from "react"
import classes from "./app.module.css"
import ButtonContainer from "./buttonContainer"
import Container from "./container"
import { socket } from "./service/service"

function App() {
    const [sendJsonMessage, lastJsonMessage,state] = socket("ws://localhost:5175")
    const [eventsData,setEventsData] = useState({"PLANE_ANGLE":{angle:0},"PLANE_SPEED":{speed:0},"PLANE_BATTERY":{battery:100}}) 
    console.log("app run")
    console.log("state : ",state)
       
   useEffect(() => {
       
         if(state === "Open")
         {
          console.log(lastJsonMessage.eventName," : ",lastJsonMessage.data[0]) 
           setEventsData(prevState => {
                   return {...prevState,[lastJsonMessage.eventName]:lastJsonMessage.data}
           })
         }

   },[lastJsonMessage])

    const handleStart = () => {
         sendJsonMessage("START")
    }
 
    const handleStop = () => {
         sendJsonMessage("STOP")
    } 

    return (
    <>
          <div className={classes.mainContent}>
                  {state === "Open" && 
                       <>
                               <Container planeData={eventsData} />
                               <ButtonContainer handleStart={handleStart} handleStop={handleStop} />
                      </>}  
          </div>
   </>
  )
}

export default App
