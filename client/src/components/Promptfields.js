import React, { useEffect, useState } from 'react'
import FiltersPopup from './FiltersPopup'
import { openAIFetcher } from '../utils/openAi'

const PromptFields = (props) => {
  /* Roadmap of this page 
  1: userPrompt changes on Search bar input change
  2: filters: numOfImages and sizeOfImages changes on input field changes (default set to 1 and 256x256), same as searchbar
  3: finalUserPrompt is set to object of userPrompt with filters preferences after input validation by validateInputs() once submit is clicked
  4: openAIFetcher() runs and fetch using openaiJs as finalUserPrompt changes (check useEffect)
  5: gets data in return and passes it to giveImageData() as an argument (giveImageData function is in HomeJs)
  */
  const [popupTrigger, setPopupTrigger] = useState(false)
  const [finalUserPrompt, setFinalUserPrompt] = useState({}) //gets user prompt with filter preferences after clicking submit
  const [userPrompt, setUserPrompt] = useState() //gets user prompt on imput field change
  const [numOfImages, setNumOfImages] = useState(1)
  const [sizeOfImages, setSizeOfImages] = useState("256x256")

  const popUpCloseBtn =
    <button onClick={() => { setPopupTrigger(false) }}
      style={{
        backgroundColor: "rgb(18, 75, 18)",
        width: "100px",
        border: "none",
        height: "30px"
      }}
    >Apply</button>

  //function to validate if inputs are as expected or not
  let validateInputs = () => {
    if (Number(numOfImages) > 10) {
      return true
    }
  }

  //onclick function
  let handleSubmit = (e) => {
    e.preventDefault()
    if (validateInputs()) {
      alert("No of results cannot be >10")
      return
    }
    setFinalUserPrompt({ prompt: userPrompt, n: Number(numOfImages), size: sizeOfImages }) //sets final user prompt to object with required filters
  }

  let fetchImageData = async ()=>{
    if (finalUserPrompt.prompt != null) {
      openAIFetcher(finalUserPrompt)
      .then((res)=>{
        props.giveImageData(res.data)
      })
    }
  }

  //useEffect runs fetching function after finalUserPrompt changes
  useEffect(() => {
    fetchImageData()
  }, [finalUserPrompt])

  return (
    <div className='homepage-main__form-wrapper'>

      <form onSubmit={handleSubmit}>
        <div className='homepage-main__searchcontrolwrapper'>

          <input type="text" placeholder='Welcome (Search your prompt here...)' onChange={(e) => { setUserPrompt(e.target.value) }} />

          <button type='submit'>Submit</button>

        </div>

        <div className='homepage-main__filterscontainer'>

          <div className='filterscontainer__wrapper'>

            <div className='filterscontainer__bigscreen'>

              <span className='headingspan'>
                Filters:
              </span>

              <div className='filterslists'>

                <span>
                  <label htmlFor="noofresults"> No of results </label>
                  <input type="text" placeholder='1' onChange={(e) => {
                    console.log("hello")
                    setNumOfImages(e.target.value)
                  }} maxLength={2} id='noofresults' />
                </span>

                <div>
                  <label htmlFor="sizeoptions"> Images Size </label>
                  <select id='sizeoptions' onChange={(e) => {
                    setSizeOfImages(e.target.value)
                  }}>
                    <option>
                      256x256
                    </option>
                    <option>
                      512x512
                    </option>
                    <option>
                      1024x1024
                    </option>
                  </select>
                </div>

              </div>

            </div>

          </div>

        </div>


      </form>

    </div>
  )
}

export default PromptFields