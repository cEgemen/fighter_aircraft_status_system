

export default function BatterySVG({batteryValue}){
    const rectHeight = 85 
    const rectWidth = 180
    const {battery} = batteryValue
    const activeAnimation = battery < 20 
    const index = rectIndex(battery)
    const color = rectsColor(battery) 
    return  <svg className="battery-svg" version="1.1"  fill="white"   xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 471.829 471.829" xmlSpace="preserve">
   <path d="M319.089,27.221h-36.475V0h-95.27v27.221h-34.607c-22.517,0-40.829,18.317-40.829,40.832v362.946   c0,22.51,18.317,40.83,40.829,40.83h166.352c22.524,0,40.832-18.32,40.832-40.83V68.052   C359.921,45.538,341.613,27.221,319.089,27.221z M332.705,431.002c0,7.501-6.108,13.607-13.616,13.607H152.737 c-7.501,0-13.608-6.095-13.608-13.607V68.052c0-7.501,6.107-13.611,13.608-13.611h166.352c7.508,0,13.616,6.109,13.616,13.611"/>
   {activeAnimation && <animate
      attributeName="opacity"
      begin="0s"
      dur="2s"
      from="1"
      to="0"
      repeatCount="indefinite" />}
   <rect height={rectHeightAlg(1,index,battery,rectHeight)} width={rectWidth}  x={145} y={354} fill={color} transform={`rotate(180 235 ${354 + (rectHeight / 2)})`}/>        
   <rect height={rectHeightAlg(2,index,battery,rectHeight)} width={rectWidth} x={145} y={256} fill={color} transform={`rotate(180 235 ${256 + (rectHeight / 2)})`} />
   <rect height={rectHeightAlg(3,index,battery,rectHeight)} width={rectWidth} x={145} y={158} fill={color} transform={`rotate(180 235 ${158 + (rectHeight / 2)})`}/>
   <rect height={rectHeightAlg(4,index,battery,rectHeight)} width={rectWidth} x={145} y={60} fill={color} transform={`rotate(180 235 ${60 + (rectHeight / 2)})`}/>
   <text opacity={index === 4 ? 0 : 1} x={190} y={130} fontSize={55}>{battery}%</text>
                   </svg>

}

const rectIndex = (value) => {
     
     if(value < 25 )
        {
            return 1
        } 
     else if(value >= 25 && value < 50)
        {
             return 2
        }   
      else if(value >= 50 && value < 75)
            {
                 return 3
            } 
      else if(value >= 75)
                {
                     return 4
                }      
}

const rectsColor = (value) => {
     
    if(value < 25 )
       {
           return "red"
       } 
    else if(value >= 25 && value < 50)
       {
            return "yellow"
       }   
     else if(value >= 50)
           {
                return "green"
           }  
}

const rectHeightAlg = (rectIndex,index,value,defaultHeight) => {
    const height = defaultHeight
   if(rectIndex < index) 
  {
     return height
  }
   else if(rectIndex === index)
     {
    const heightRatio = height / 25;
    const battery = (25 * index) - value

    return height -(battery * heightRatio)
     }
    
     return 0
}



