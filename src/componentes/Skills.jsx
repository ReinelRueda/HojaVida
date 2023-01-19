import React from 'react'

const Skills = () => {
  return (
    <div className='Skills'>
      <h3>Skills</h3>
      <div>
      <label for="file">HTML:</label> <br />
      <progress id="file" max="100" value="80"> 80% </progress><br />
      <label for="file">CSS:</label> <br />
      <progress id="file" max="100" value="70"> 70% </progress><br />
      </div>
      <div>
      <label for="file">JAVASCRIPT:</label><br />
      <progress id="file" max="100" value="90"> 90% </progress><br />
      <label for="file">REACT:</label><br />
      <progress id="file" max="100" value="80"> 80% </progress>
      </div>
      </div>
      
  )
}

export default Skills