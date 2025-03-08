import { useState } from 'react'
import ProjectPage from './projectConfig/projectPage'
import Pagination from './project1Pagination/pagination'
import DigitalClock from './project2DigitalClock/digitalClock'
import Timer from './project3CountDownTimer/timer'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <h2 style={{
          textAlign:'center',
          textDecoration:'underline',
          textUnderlineOffset:'8px'
        }}>Basic React Projects</h2>
      </div>
      {/* project 1 */}
      <ProjectPage projectNumber={1} ProjectName={"Pagination"}>
        <Pagination/>
      </ProjectPage>

      {/* project 2 */}

      <ProjectPage projectNumber={2} ProjectName={"Digital Clock"} >
        <DigitalClock/>
      </ProjectPage>

      {/* project 3 */}
      <ProjectPage ProjectName={"Digital Timer"} projectNumber={3}>
        <Timer/>
      </ProjectPage>
      

    </>
  )
}

export default App
