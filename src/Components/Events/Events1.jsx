import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";

const Events1 = () => {
    const eventsData = [
        {
            id: 1,
            title: "TechXen Webinar Series",
            category: "Webinars",
            location: "Online",
            date: "12/15/2024 • 2:00:00 PM",
            description: "Join our monthly tech webinar series covering the latest in IT solutions and digital transformation.",
            image: "/assets/img/events/event1.jpg"
        },
        {
            id: 2,
            title: "Digital Transformation Summit",
            category: "Conference",
            location: "New York",
            date: "1/20/2025 • 9:00:00 AM",
            description: "A comprehensive conference on digital transformation strategies for modern businesses.",
            image: "/assets/img/events/event2.jpg"
        },
        {
            id: 3,
            title: "Cybersecurity Workshop",
            category: "Workshop",
            location: "San Francisco",
            date: "2/10/2025 • 10:00:00 AM",
            description: "Hands-on workshop covering essential cybersecurity practices for small to medium businesses.",
            image: "/assets/img/events/event3.jpg"
        }
    ];

    return (
        <div className="events sp">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading1">
                    <SectionTitle
                        SubTitle="Events"
                        Title="Upcoming Events & Workshops"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row">
              {eventsData.map((event) => (
                <div key={event.id} className="col-lg-4 col-md-6 col-12">
                  <div className="single-event-box">
                    <div className="event-image">
                      <img src={event.image} alt={event.title} />
                      <div className="event-category">
                        <span>{event.category}</span>
                      </div>
                    </div>
                    <div className="event-content">
                      <h4>{event.title}</h4>
                      <p className="event-location">{event.location}</p>
                      <p className="event-date">{event.date}</p>
                      <p className="event-description">{event.description}</p>
                      <Link to="#" className="event-btn">Learn More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
};

export default Events1;
