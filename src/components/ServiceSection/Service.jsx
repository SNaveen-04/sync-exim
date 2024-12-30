import "./Service.css"
import Image1 from "../../assests/air.jpg"
import Image2 from "../../assests/ship.jpg"
import Image3 from "../../assests/truck.jpg"


const Service = () => {

  const servicesData = [
    {
      img:Image1,
      size:'300px',
      main : 'Timely service',
      sub : 'Delivered Packages',
      content : 'Delivering on time is delivering on trust'
    },
    {
      img:Image2,
      size:'300px',
      main : 'Global reach',
      sub : 'Miles Driven',
      content : 'Connecting to a World of Opportunities'
    },
    {
      img:Image3,
      size:'300px',
      main : 'Credibility',
      sub : 'Stored In Stock',
      content : "Credibility is not just a trait, it's a commitment to excellence."
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
          <span>
            <img src={service.img} className="h-72 w-72 !rounded-sm"/>
          </span>
        </div>
        <h2 style={{color:"#ffffff"}}>{service.main}</h2>
        <h4 style={{color:"#4AB9CF"}}>{service.sub}</h4>
        <p style={{color:"#d2d2d2"}} className='text-xs'>{service.content}</p>
    </div>
              </div>
            })
          }
        </div>
    </div>
  )
}

export default Service