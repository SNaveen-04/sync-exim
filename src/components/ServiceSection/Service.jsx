import "./Service.css"
import Image1 from "../../assests/air.jpg"
import Image2 from "../../assests/ship.jpg"
import Image3 from "../../assests/truck.jpg"


const Service = () => {

  const servicesData = [
    {
      img:Image1,
      size:'300px',
      main : '9 Million',
      sub : 'Delivered Packages',
      content : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium totam remap'
    },
    {
      img:Image2,
      size:'300px',
      main : '25 Million',
      sub : 'Miles Driven',
      content : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium totam remap'
    },
    {
      img:Image3,
      size:'300px',
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
              <div>
        <div className="icon-container">
          <span className={service.class}>
            <img src={service.img} className={`h-[${service.size}] w-[${service.size}]`}/>
          </span>
        </div>
        <h2 style={{color:"#ffffff"}}>{service.main}</h2>
        <h4 style={{color:"#4AB9CF"}}>{service.sub}</h4>
        <p style={{color:"#d2d2d2"}}>{service.content}</p>
    </div>
              </div>
            })
          }
        </div>
    </div>
  )
}

export default Service