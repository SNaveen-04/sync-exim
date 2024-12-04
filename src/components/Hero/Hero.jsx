import "./Hero.css"

const Hero = () => {
  return (
    <div id="heroSection">
        <div className="slide activeslide">1</div>
        <div className="slide">2</div>
        <div className="slide">3</div>

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