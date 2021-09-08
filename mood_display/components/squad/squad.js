import React from 'react';

import MiniInfoBox from '../miniInfoBox/miniInfoBox';
import Link from '../link/link';
import MoodLevel from '../moodLevel/moodLevel';

// TODO: create Unit test
// TODO: add proptype verification

const Squad = ({props}) => {

  return (
    <div className="border_solid border rounded border-gray-200">
      <MoodLevel percentage={props.totalMoodPercentage} squadMood={props.squadMood } />
      <div className="font-bold text-xl pl-6 my-2.5">
        {props.name}
      </div>
      <div className="flex flex-row justify-around justify-items-stretch mx-4 ">
        <MiniInfoBox title='Members' data={props.members.length} />
        <MiniInfoBox title='Engagement' data={props.EngagementPercentage} />
      </div>
      <div className="flex flex-row justify-center my-3">
        <Link label='View Squad' path= '/'/>
      </div>
    </div>
  )
}

export default Squad;