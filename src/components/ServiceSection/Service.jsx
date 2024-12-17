import Card from "../Card/Card"
import "./Service.css"
import Image1 from "../../assests/air.jpg"
import Image2 from "../../assests/ship.jpg"
import Image3 from "../../assests/truck.jpg"


const Service = () => {

  const servicesData = [
    {
      img:Image1,
      size:'320px',
      main : '9 Million',
      sub : 'Delivered Packages',
      content : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium totam remap'
    },
    {
      img:Image2,
      size:'320px',
      main : '25 Million',
      sub : 'Miles Driven',
      content : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium totam remap'
    },
    {
      img:Image3,
      size:'320px',
      main : '1 Million',
      sub : 'Stored In Stock',
      content : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium totam remap'
    },
  ]

  return (
    <div id="services">
        <div className="heading">
            <p className="logo">Freight</p>
            <p className="main-heading">SyncExIm <span>Services</span></p>
        </div>
        <div className="card-container">
          {
            servicesData.map((service,index) => {
              return <div className="card" key={index}>
                <Card img={service.img} main={service.main} sub={service.sub} content={service.content} size={service.size} mainColor={"#ffffff"} subColor={"#4AB9CF"} contentColor={"#d2d2d2"} />
              </div>
            })
          }
        </div>
    </div>
  )
}

export default Service