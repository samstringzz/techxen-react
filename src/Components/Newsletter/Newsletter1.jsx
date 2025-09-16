import { Link } from "react-router-dom";

const Newsletter1 = () => {
    return (
        <div className="newsletter sp">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="heading1">
                  <h2 className="title">Want Something Extra?</h2>
                  <div className="space16"></div>
                  <h3>Sign Up For Our Newsletter</h3>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="newsletter-form">
                  <form action="#">
                    <div className="input-group">
                      <input type="email" className="form-control" placeholder="Enter your email address" />
                      <button className="btn btn-primary" type="submit">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Newsletter1;
