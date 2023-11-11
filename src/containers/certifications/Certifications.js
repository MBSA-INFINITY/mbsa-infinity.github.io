import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import mbsa from "../../assests/images/hactrix_sangyan.jpg";

function Certifications(props) {
  const theme = props.theme;
  return (
    <div className="main" id="achievements">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Achievements
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        <center>
          <img
            alt="MBSA"
            src={mbsa}
            style={{ width: "90%", marginBottom: "30px" }}
          />
        </center>
        {certifications.certifications.map((cert) => {
          return (
            <CertificationCard
              key={cert.title}
              certificate={cert}
              theme={theme}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Certifications;
