import React from 'react'
import AreasPage from "../AreasPage";
import About1 from "../assets/images/about1.jpg";
import { Helmet } from 'react-helmet';

const PottersBar = () => {
  const paraOneContent = `
      
   Reduce your tyre-related stress with our exceptional  <strong>mobile tyre services</strong> Pro Tyre Fitters is a trusted tyre service provider in Potters Bar, London. We deal with several tyre-related issues to secure you from unexpected incidents. 


    <br/>
   Pro Tyre Fitters' objective is to provide the best <strong> tyre services</strong>to their customers. We train our professionals to deal with the hassle, provide the best tool kit for the service, and provide branded tyres according to your vehicle.

    <br/>

    We are your reliable partner in your journey to maintain the health of your van, truck and car tyres. Providing services for <strong>mobile tyre fitting potters bar, mobile tyre repair, and mobile tyre replacement </strong>We are available 24/7 to manage the emergencies.

    <br/>
   Share your tyre-related concerns with our proficients, so call us today to get the quick <strong> tyre service </strong>at your location. Our service provider arrive at your spot in 30 to 40 minutes.


    
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
   
      firstHeading='24/7 mobile tyre services Potters Bar, London.'
      // secondHeading="Mobile Tyre Fitting in & Around Luton"
      img1={About1}
     paraOne={paraOneContent}
      />
    </>
  )
}

export default PottersBar
