import React from 'react'
import '../CSS/ManhattanPopulationExplorer.css'

const ManhattanPopulationExplorer = () => {
  return (
    <div className='manhattanPopulationExplorer_MainContainer'>
        <div className="leftStoryContainer">
       <div> <h6>The Story of Manhattan's Dynamic Population</h6></div>
        <div className='leftContent'><p>The visualization you see here is a model of the dynamic population of Manhattan, block-by-block and hour-by-hour for a typical week in late Spring. The model is currently fixed to your local time. The population estimates are the result of a combination of US Census data and a geographic dispersion of calculated net inflows and outflows from subway stations, normalized to match population daytime and nighttime estimates provided by a study from NYU Wagner. You may exit the story at any time by selecting the ‘Visualization’ or ‘Statistics’ tabs in the header above. For more information, click ‘About’. To continue, click the arrows below.</p></div>
        </div>
      <div className='rightContainer'> <div className="rightStoryContainer1">
       <div><p>Estimated Population (Census Block):</p></div>
        </div>
        <div className="rightStoryContainer2">
       <div><p>Visible Districts:</p></div>
        </div></div>
    </div>
  )
}

export default ManhattanPopulationExplorer