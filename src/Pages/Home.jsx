import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
import Events1 from "../Components/Events/Events1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Newsletter1 from "../Components/Newsletter/Newsletter1";
import Products1 from "../Components/Products/Products1";
import Project1 from "../Components/Project/Project1";
import Services1 from "../Components/Services/Services1";
import Tagline1 from "../Components/Tagline/Tagline1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

const Home = () => {
    return (
        <div className="home-page1">
            {/* 1. Hero Section */}
            <HeroBanner1
                bgImg="/assets/img/bg/hero1-bg.png"
                subTitle="Hi, I'm Alika Maya"
                title="Empowering Lives Through <span class='after'>Style & Inspiration</span>"
                content=""
                btnName=""
                btnUrl=""
                image1="/assets/img/hero/hero1-image1.png"
                image2="/assets/img/hero/hero1-image2.png"
                shapeImage1="/assets/img/hero/hero1-image3.png"
                shapeiamge2="/assets/img/hero/hero1-image4.png"
            ></HeroBanner1>

            {/* 2. Gallery/Projects Section */}
            <Project1></Project1>

            {/* 3. Events Section */}
            <Events1></Events1>

            {/* 4. Tagline Section */}
            <Tagline1></Tagline1>

            {/* 5. Services We Offer Section */}
            <Services1></Services1>

            {/* 6. What Our Clients Say (Testimonials) Section */}
            <Testimonial1></Testimonial1>

            {/* 7. Our Products Section */}
            <Products1></Products1>

            {/* 8. Subscribe to Newsletter Section */}
            <Newsletter1></Newsletter1>

            {/* Contact Section - Last before footer */}
            <ContactInfo1></ContactInfo1>
        </div>
    );
};

export default Home;