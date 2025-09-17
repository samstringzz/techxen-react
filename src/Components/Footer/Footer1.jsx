import { Link } from "react-router-dom";

const Footer1 = () => {
    return (
        <div className="footer1 _relative">
        <div className="container">
             <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10 col-12">
                       <div className="single-footer-items footer-logo-area text-center">
                            <div className="space20"></div>
                            <div className="heading1">
                              <p>At TechXen IT Solutions, we are dedicated to delivering innovative technology solutions tailored to meet the unique needs of businesses like yours. </p>
                            </div>
                       </div>
                  </div>


             </div>

             <div className="space40"></div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                   <div className="coppyright">
                     <p>Copyright @2024 TechXen.All Rights Reserved</p>
                   </div>
              </div>
              <div className="col-md-7">
                   <div className="coppyright right-area">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                   </div>
              </div>
         </div>
          </div>
     </div>

      </div>
    );
};

export default Footer1;