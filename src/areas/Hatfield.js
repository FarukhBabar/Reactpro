import React from 'react'
import AreasPage from "../AreasPage";
import About1 from "../assets/images/about1.jpg";
import { Helmet } from 'react-helmet';

const Hatfield = () => {
   const paraOneContent = `
   
Pro Tyre Fitters provides  <strong> mobile tyre services in Hatfield</strong>that make your journey beautiful in the city. Our goal is to serve you beyond your expectations. We maintain and resolve tyre-related issues to ensure your vehicle is ready for the journey. 

 <br/>
  We provide <strong>24/7 mobile tyre fitting Hatfield, mobile tyre repair </strong> and  <strong>mobile tyre replacement</strong> services that handle emergencies. All tyre services are available at a reasonable price at your location at your desired time.
<br/>
  Our service provider is well certified and has years of experience in dealing with tyre troubles, knowing how to deal with the problem and permanently address the problem.

<br/>
  We are available 24 hours, seven days a week for the service; our experts arrive at your location in 30 to 40 minutes. Call us today to get your<strong> mobile tyre service</strong>for your vehicle and enjoy the hassle-free journey.

    
  `;
  return (
    <>
    <Helmet>
        <title id='meta-title'>Areas Page</title>
        <meta
          name="description"
          id='meta-description'
          content="Descripion of Areas Page"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <AreasPage
      mergedHeaderStyle="tr areas"
      // Text
    
      firstHeading='24/7 Mobile Tyre Service Hatfield, London'
      img1={About1}
      
       paraOne={paraOneContent}

     
      />
    </>
  )
}

export default Hatfield
