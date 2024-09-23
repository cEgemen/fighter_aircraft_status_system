import classes from "./buttonContainer.module.css"
export default function ButtonContainer({handleStart,handleStop}){
        
       return <>
                <div className={classes.buttonContainer}>
                       <button onClick={handleStart}>START MESSAGE</button>
                       <button onClick={handleStop}>STOP MESSAGE</button>
                </div>
             </>
}