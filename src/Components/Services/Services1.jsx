import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/Home1/services1.json';
import { Link } from "react-router-dom";

const Services1 = () => {
    const servicesWithPricing = [
        {
            title: "Photography",
            description: "Professional photography services for personal branding and business needs.",
            price: "₦150/session",
            icon: "/assets/img/icons/service1.png",
            btnLink: "/service/service-details",
            btnText: "Learn More"
        },
        {
            title: "Brand Strategy",
            description: "Comprehensive brand development and strategic planning for entrepreneurs.",
            price: "₦400/project",
            icon: "/assets/img/icons/service2.png",
            btnLink: "/service/service-details",
            btnText: "Learn More"
        },
        {
            title: "Social Media Marketing",
            description: "Expert social media management and content strategy for maximum engagement.",
            price: "₦250/month",
            icon: "/assets/img/icons/service3.png",
            btnLink: "/service/service-details",
            btnText: "Learn More"
        }
    ];

    return (
        <div className="services sp">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading1">
                    <SectionTitle
                        SubTitle="Services Offered"
                        Title="Services"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row">
              {servicesWithPricing.map((service, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-12">
                  <div className="single-service-box">
                    <div className="service-icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <div className="service-content">
                      <h4>{service.title}</h4>
                      <p className="service-description">{service.description}</p>
                      <div className="service-price">
                        <span className="price">{service.price}</span>
                      </div>
                      <Link to={service.btnLink} className="service-btn">{service.btnText}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
};

export default Services1;