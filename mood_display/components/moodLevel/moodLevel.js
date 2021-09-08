import React from 'react';

const MoodLevel = ({percentage, squadMood }) => {

  let moodTag = "";
// TODO: remove text to translation file or statics
  if (squadMood === "positive") {
    moodTag = "This squad is feeling great";
  } else if (squadMood === "neutral") {
    moodTag = "This squad is feeling low"
  } else  if (squadMood === "negative") {
    moodTag = "This squad is not feeling great"
  }

// TODO: add theme colors, get bg-color working with custom colors
  return (
    <div className={`relative mood-level mood-${squadMood}`} >

      <img src={`assets/${squadMood}-gradient.svg`} alt={`background ${squadMood}`} className="absolute z-20" />
      <img src={`assets/${squadMood}.svg`} alt={`Mood Owl ${squadMood}`} className="absolute z-10" />
      <div className="z-30 absolute pt-6 pl-6 text-white">
        <div className="font-bold text-6xl">{percentage}%</div>
        <div data-testid="moodLevelTag" >{moodTag}</div>
      </div>
    </div>
  )
}

export default MoodLevel;