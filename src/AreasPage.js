import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AreasPage = ({ pageTitle, ...otherProps }) => {
    const {
        mergedHeaderStyle,
        firstHeading,
       
        secondHeading,
        img1,
        
        paraOne,
       
      } = otherProps;
    return (
    <>
    <Helmet>
        <title id='meta-title'>Areas Page</title>
        <meta
          name="description"
          id='meta-description'
          content="Descripion of Areas Page"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
     {/* Banner Section */}
     <header className={mergedHeaderStyle}>
        <h1>{pageTitle}</h1>
        <h5>
          {/* <Link to="/" className="linkStyle">
            <i class="fa-solid fa-house"></i> Home{" "}
          </Link>{" "} */}
           {pageTitle}
        </h5>
      </header>

      <section>
       <h2 className="text-center mt-3">{firstHeading}</h2> 

       <Container className="py-5">
        <Row style={{ marginTop: "2.5rem" }}>
          <Col md={6}>
            <h2 className="text-success">{secondHeading}</h2>
            <p>
             
            <p dangerouslySetInnerHTML={{ __html: paraOne }}></p>
              <div>
              <a href="tel:07441428174" className="btn btn-success" style={{ textDecoration: 'none', color: 'white' }}>
                Call Now
              </a>
              </div>
            </p>
          </Col>
          <Col md={6} className="order-small-1 d-flex justify-content-center">
            <img src={img1} alt="Mission" className="img-fluid rounded" />
          </Col>
        </Row>
        </Container>
       
      </section> 
    </>
  )
}

export default AreasPage
