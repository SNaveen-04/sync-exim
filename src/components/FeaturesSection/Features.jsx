import Card from "../Card/Card"
import "./Features.css"
import Image1 from "../../assests/step1.png"


const Features = () => {

  const featuresData = [
    {
      img:Image1,
      size:'50px',
      main : '9 Million',
      sub : 'Delivered Packages',
      content : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium totam remap'
    },
    {
      img:Image1,
      size:'50px',
      main : '25 Million',
      sub : 'Miles Driven',
      content : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium totam remap'
    },
    {
      img:Image1,
      size:'50px',
      main : '1 Million',
      sub : 'Stored In Stock',
      content : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium totam remap'
    },
  ]

  return (
    <div id="features">
        <div className="heading">
            <p className="logo">Features</p>
            <p className="main-heading">Provide Future  <span>Of Delivery</span></p>
        </div>
        <div className="card-container">
          {
            featuresData.map((feature,index) => {
              return <div className="card" key={index}>
                <Card img={feature.img} main={feature.main} sub={feature.sub} content={feature.content} size={feature.size}/>
              </div>
            })
          }
        </div>
    </div>
  )
}

export default Features