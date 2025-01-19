import React from "react";
import "../../css/book.css";

export default function Book() {
  return (
    <>
      <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="bg-white shadow shadow1" style={{ padding: "35px", backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/socialbg4.jpeg'})`, }} >
            {/* Section with main icons */}
            <div className="row g-2">
              <div className="social-icons-container">
              <a
                href="tel:+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon call"
                title="Call"
              >
                <i className="fas fa-phone-alt"></i>
              </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                  title="WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="mailto:info@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon email"
                  title="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="https://www.example-booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon bookingSite"
                  title="Booking Site"
                >
                  <i className="fas fa-globe"></i>
                </a>
                <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon location"
                  title="Location"
                >
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
            </div>

            {/* Divider */}
            <hr className="divider" />

            {/* Call, Mail, and Location Details Section */}
            <div className="contact-info-section">
              <div className="contact-info-item">
                <i className="fa fa-phone-alt"></i>
                <span className="contact-text">+123 456 7890</span>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-envelope contact-icon"></i>
                <span className="contact-text">info@example.com</span>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <span className="contact-text">123 Main Street, City, Country</span>
              </div>
            </div>

            {/* Divider */}
            <hr className="divider" />

            {/* Social Media Icons Section */}
            <div className="social-icons-row">
                <a
                  href="https://www.instagram.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                  title="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon facebook"
                  title="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon linkedin"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.youtube.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon youtube"
                  title="YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>

          </div>
        </div>
      </div>
    </>
  );
}
