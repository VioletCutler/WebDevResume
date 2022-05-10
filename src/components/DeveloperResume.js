function DeveloperResume() {
  return (
    <div>
      <header className="bg-light text-center">
        <p>Web Developer Resume</p>
        <h1>
          {" "}
          VIOLET CUTLER <i>(She/They)</i>
        </h1>
      </header>

      <section className="bg-dark">
        <div className="container">
          <div className="split">
            <div>
              <img
                id="violetImage"
                src="Violet.png"
                alt="A smiling white woman with long brown hair. She is wearing a green top and red lipstick."
              ></img>
            </div>
            <div>
            <h2 className="text-center">About Me</h2>
              <p className="bg-dark">
                I live in Philadelphia. I am new to coding. I am a musician and
                video artist making the transition to tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container">
          <div className="split">
            <div>
              <img src="GraceHopper.jpg" alt="Grace Hopper Program Logo"></img>
            </div>
            <div>
            <h2 className='text-center'>Grace Hopper Program at Fullstack Academy</h2>
              <p className="bg-primary">Graduated in April of 2022</p>
            </div>
          </div>
        </div>
      </section>

      <div></div>
    </div>
  );
}

export default DeveloperResume;
