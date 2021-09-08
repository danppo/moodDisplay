import {useEffect, useState} from 'react';
import axios from 'axios';

import Squad from '../components/squad/squad'

export default function Home() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/squads`) //TODO: construct URL from base and endpoints
    .then(res => {
      setError(null);
      const processedData = res.data.squads.map((squad) => {
        let totalScore = 0;
        squad.members.forEach((member) => { totalScore += member.moodPercentage });
        const totalMoodPercentage = Math.round(totalScore / squad.members.length);
        const squadMood = totalMoodPercentage < 30 ? 'negative' : totalMoodPercentage < 60 ? 'neutral' : 'positive';
        //TODO: pull out text into statics file 
        //TODO: pull out numbers into statics file 'no magic numbers'
        return ({
          ...squad,
          totalMoodPercentage,
          squadMood
        })
      })
      setData(processedData);

    })
    .catch(err => {
      setError(err);
    }

    )
  }, [])


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {error &&
      // TODO: make error into component
      <div className="flex flex-col justify-center items-center flex-wrap rounded border-2 border-red-900 bg-red-100 p-4 text-lg">
        <div>
        Oh no, something has gone wrong
        </div>
        <div>
          Error: "{error.message}"
        </div>
      </div>

      }
      <div className="flex flex-row justify-center flex-wrap">
        { data.map((item) =>
          <div className="m-4">
            <Squad key={item.id} props={item} />
          </div>
        )}
      </div>
    </div>
  )
}
