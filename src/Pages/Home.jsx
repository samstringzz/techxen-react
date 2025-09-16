import Blog1 from "../Components/Blog/Blog1";
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
import Cta1 from "../Components/Cta/Cta1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Project1 from "../Components/Project/Project1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

const Home = () => {
    return (
        <div className="home-page1">
            {/* Hero Section */}
            <HeroBanner1
                bgImg="/assets/img/bg/hero1-bg.png"
                subTitle="TechXen Technology & It Solution"
                title="Transform Your Business With Next Generation <span class='after'>IT Solutions</span>"
                content="Welcome to TechXen where we specialise in delivering tailored technology and IT solutions designed to propel your business forward. From streamlining operations to and driving growth."
                btnName="Get Started Now"
                btnUrl="/contact"
                image1="/assets/img/hero/hero1-image1.png"
                image2="/assets/img/hero/hero1-image2.png"
                shapeImage1="/assets/img/hero/hero1-image3.png"
                shapeiamge2="/assets/img/hero/hero1-image4.png"
            ></HeroBanner1>

            {/* Gallery/Projects Section */}
            <Project1></Project1>

            {/* Testimonials Section */}
            <Testimonial1></Testimonial1>



            {/* Additional sections */}
            <Blog1></Blog1>

            <Cta1></Cta1>

            {/* Contact Section - Last before footer */}
            <ContactInfo1></ContactInfo1>
        </div>
    );
};

export default Home;