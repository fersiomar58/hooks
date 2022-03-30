import React from 'react'

export const StarsRating = ({rating,handelRatnig}) => {
    const stars=(rating)=>{
        let tab=[]
        for(let i=1;i<=6;i++){
          if(i<=rating){
            tab.push(<span onClick={()=>handelRatnig(i)} style={{color:"gold",cursor:"pointer" }}>★</span>)
          }else{
            tab.push(<span  onClick={()=>handelRatnig(i)} style={{cursor:"pointer"}} >★</span>)
          }
        }return tab
      }
  return (
    <div> {React.Children.toArray} {stars(rating)} </div>
  )
}

StarsRating.defaultProps ={
    handelRatnig:()=>{}
}
