import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";

const Products1 = () => {
    const productsData = [
        {
            id: 1,
            name: "Cloud Management Suite",
            price: "$299",
            rating: 4.5,
            image: "/assets/img/products/product1.jpg",
            description: "Comprehensive cloud management solution for enterprise businesses."
        },
        {
            id: 2,
            name: "Security Analytics Platform",
            price: "$199",
            rating: 4.8,
            image: "/assets/img/products/product2.jpg",
            description: "Advanced security monitoring and threat detection platform."
        },
        {
            id: 3,
            name: "IT Automation Tool",
            price: "$149",
            rating: 4.6,
            image: "/assets/img/products/product3.jpg",
            description: "Streamline your IT operations with our automation toolkit."
        },
        {
            id: 4,
            name: "Data Backup Solution",
            price: "$99",
            rating: 4.7,
            image: "/assets/img/products/product4.jpg",
            description: "Reliable and secure data backup and recovery solution."
        }
    ];

    return (
        <div className="products sp">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading1">
                    <SectionTitle
                        SubTitle="Our Products"
                        Title="Innovative IT Solutions & Products"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row">
              {productsData.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-6 col-12">
                  <div className="single-product-box">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                      <div className="product-rating">
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <div className="product-content">
                      <h4>{product.name}</h4>
                      <p className="product-description">{product.description}</p>
                      <div className="product-price">
                        <span className="price">{product.price}</span>
                      </div>
                      <Link to="#" className="product-btn">Buy Now</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
};

export default Products1;
