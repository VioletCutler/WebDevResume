function HomePage() {
  return (
    <div>
      <header>Hello World</header>
      <div className='homePage'>
      <img
        id="violetImage"
        src="Violet.png"
        alt="A smiling white woman with long brown hair. She is wearing a green top and red lipstick."
      ></img>
      <div className="homePagePosts">
        <div className="posts">
          <h1 className="title">Violet Cutler <h5><i>(She/They)</i></h5></h1>
          <p>
          I am a transwoman living in Philadelphia.
          I have been an artist for more than a decade. I record videos on VHS
          and peform soundtracks to them on Saxophone and Synthesizer. 
          <br />
          <br />
          In August of 2022 I quit my job and began my transition into tech. I graduated from the
          <b> Grace Hopper Program at Fullstack Academy</b> in April of 2022.
          <br /><br />
          This website is meant to showcase the work I have done as an artist as well as the work I 
          have done since starting my journey as a web developer.

          < br />< br />

          </p>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default HomePage;
