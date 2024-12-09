import "./Hero.css"

const Hero = () => {

  const HeroContents = [
    "Slide1",
    "Slide2",
    "Slide3",
  ]

  return (
    <div id="heroSection">
        {
          HeroContents.map((slide)=>{
            <div className={`slide activeslide`}>
              {slide}
            </div>
          })
        }
        {/* <div className="slide activeslide">1</div>
        <div className="slide">2</div>
        <div className="slide">3</div> */}

        <div className="arrow prev">
            <span>&lt;</span>
        </div>
        <div className="arrow next">
            <span>&gt;</span>
        </div>
    </div>
  )
}

export default Hero