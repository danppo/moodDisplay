import React from 'react';

const MiniInfoBox = ({title, data}) => {
  return (
    <div className="border_solid border rounded border-gray-200 p-2 mx-1 w-1/2">
      <div data-testid="miniInfoBoxTitle" className="font-bold text-lg pl-1.5 pt-1 ">
        {title}
      </div>
      
      <div  data-testid="miniInfoBoxData" className="font-bold text-3xl pl-1.5 pt-1">
        {data}
        {title === "Engagement" && //TODO: verify against statics file 
          <span className="text-xl align-top">%</span>
        }
      </div>
      
    </div>
  )
}

export default MiniInfoBox;