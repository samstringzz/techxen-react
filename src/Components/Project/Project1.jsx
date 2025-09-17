import { useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/Home1/project1.json';
import SectionTitle from "../Common/SectionTitle";

const Project1 = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [lightboxImage, setLightboxImage] = useState(null);

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Web Development' },
        { id: 'mobile', name: 'Mobile Apps' },
        { id: 'cloud', name: 'Cloud Solutions' },
        { id: 'security', name: 'Cybersecurity' }
    ];

    const projectsWithCategories = [
        { ...data[0], category: 'web' },
        { ...data[1], category: 'mobile' },
        { ...data[2], category: 'security' },
        { ...data[3], category: 'web' },
        { ...data[4], category: 'cloud' },
        { ...data[5], category: 'mobile' }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projectsWithCategories 
        : projectsWithCategories.filter(project => project.category === activeFilter);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <div className="project sp">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading1">
                    <SectionTitle
                        SubTitle="Media Gallery"
                        Title="Showcasing Our Creative Work & Projects"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="row">
              <div className="col-lg-12">
                <div className="gallery-filters">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                      onClick={() => setActiveFilter(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space30"></div>
            
            {/* Gallery Grid */}
            <div className="row">
              <div className="gallery-grid">
                {filteredProjects.map((item, i) => (
                  <div key={i} className="gallery-item" data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="gallery-card">
                      <div className="gallery-image" onClick={() => openLightbox(item.img)}>
                        <img src={item.img} alt={item.title} />
                        <div className="gallery-overlay">
                          <div className="gallery-actions">
                            <button className="gallery-btn" onClick={() => openLightbox(item.img)}>
                              <i className="bi bi-zoom-in"></i>
                            </button>
                            <Link to="/project/project-details" className="gallery-btn">
                              <i className="bi bi-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="gallery-category">
                          <span>{item.category}</span>
                        </div>
                      </div>
                      <div className="gallery-content">
                        <h3>{item.title}</h3>
                        <p>Professional {item.category} solution</p>
                        <Link to="/project/project-details" className="gallery-link">
                          {item.btnName} <i className="bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lightbox */}
            {lightboxImage && (
              <div className="lightbox" onClick={closeLightbox}>
                <div className="lightbox-content">
                  <button className="lightbox-close" onClick={closeLightbox}>
                    <i className="bi bi-x"></i>
                  </button>
                  <img src={lightboxImage} alt="Gallery" />
                </div>
              </div>
            )}
          </div>
        </div>
    );
};

export default Project1;