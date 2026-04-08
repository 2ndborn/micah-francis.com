import React from 'react'

const AboutMe = () => {
  return (
    <div>
        <section style={{height: "25vh", display: "flex", alignItems: "center"}}>
          <h1>About Me</h1>
      </section>
      <section style={{ position: "relative", height: "50vh", backgroundColor: "grey" }}>
        <h2>Executive Statement</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Neque eius, distinctio adipisci facilis dolorem consequuntur 
            dolores odio excepturi? Iste sapiente iusto, corporis et quasi 
            porro eius quibusdam laborum quas aliquam.
        </p>
      </section>
      <section style={{ position: "relative", height: "100vh", backgroundColor: "yellow" }}>
        Qualifications
      </section>
      <section style={{ position: "relative", height: "100vh", backgroundColor: "yellow" }}>
        Skills & Attributes
      </section>
      <section style={{ position: "relative", height: "100vh", backgroundColor: "yellow" }}>
        Work Experience
      </section>
      <section style={{ position: "relative", height: "100vh", backgroundColor: "yellow" }}>
        Hobbies & Interests
      </section>
    </div>
  )
}

export default AboutMe