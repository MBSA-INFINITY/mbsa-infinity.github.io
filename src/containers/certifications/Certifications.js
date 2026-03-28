import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import mbsa from "../../assests/images/hactrix_sangyan01.png";

// Swiper Components and Styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Certifications(props) {
  const theme = props.theme;

  const linkedInPosts = [
    "7424395204868304896",
    "7062840768649965569",
    "7246094202214727680",
  ];

  return (
    <div className="main" id="achievements">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Achievements
          </h1>
        </Fade>
      </div>

      {/* SWIPER CAROUSEL SECTION */}
      <div className="spotlight-wrapper">
        <Fade bottom duration={2000}>
          {/* FEATURED TITLE ADDED HERE */}
          <h2 className="spotlight-header" style={{ color: theme.text }}>
            Featured Spotlight
          </h2>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            className="mySwiper"
          >
            {linkedInPosts.map((postId, index) => (
              <SwiperSlide key={index}>
                <div className="linkedin-card">
                  <iframe
                    src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${postId}?collapsed=1`}
                    height="500"
                    width="100%"
                    frameBorder="0"
                    allowFullScreen=""
                    title={`post-${index}`}
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
      </div>

      {/* CERTIFICATES SECTION */}
      <div className="certs-body-div">
        {certifications.certifications.map((cert) => (
          <CertificationCard
            key={cert.title}
            certificate={cert}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}

export default Certifications;
