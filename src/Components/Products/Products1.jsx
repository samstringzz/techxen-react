import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";

const Products1 = () => {
    const productsData = [
        {
            id: 1,
            name: "Sneakers",
            price: "₦49,000",
            rating: 4.5,
            image: "/assets/img/products/product1.jpg",
            description: "High-quality sneakers for everyday comfort."
        },
        {
            id: 2,
            name: "Wrist Watch",
            price: "₦19,000",
            rating: 4.5,
            image: "/assets/img/products/product2.jpg",
            description: "Elegant wrist watch for style and functionality."
        },
        {
            id: 3,
            name: "Green Handbag",
            price: "₦99,000",
            rating: 4.5,
            image: "/assets/img/products/product3.jpg",
            description: "Stylish green handbag for modern fashion."
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
                <div key={product.id} className="col-lg-4 col-md-6 col-12">
                  <div className="single-product-box">
                    <div className="product-rating">
                      <i className="bi bi-star-fill"></i>
                      <span>{product.rating}</span>
                    </div>
                    <div className="product-content">
                      <div className="product-price">
                        <span className="price">{product.price}</span>
                      </div>
                      <h4>{product.name}</h4>
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
