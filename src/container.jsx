import classes from "./container.module.css"
import BatterySVG from "./SVGComponents/battery"
import PlaneSVG from "./SVGComponents/plane"
import Speedometer from "./SVGComponents/speedometer"
export default function Container({planeData}){

      return <>
                    <div className={classes.container}>
                         <div className={classes.containerLeftSide}>
                              <PlaneSVG  angleData={planeData["PLANE_ANGLE"]}/>  
                         </div>
                         <div className={classes.containerRightSide}>
                              <BatterySVG  batteryValue={planeData["PLANE_BATTERY"]}/>
                              <Speedometer speedValue={planeData["PLANE_SPEED"]}/>
                         </div>
                              
                    </div>
             </>

}