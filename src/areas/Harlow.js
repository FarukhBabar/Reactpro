import React from 'react'
import AreasPage from "../AreasPage";
import About1 from "../assets/images/about1.jpg";
import { Helmet } from 'react-helmet';

const Harlow = () => {
  const paraOneContent = `
   Get seamless <strong>mobile tyre services in Harlow.</strong> Pro Tyre Fitters is a standard platform that provides amazing 24/7 mobile tyre services at a very affordable price. We train our proficients to deal with emergencies, analyze the cause of problems, and solve them immediately. 
 <br/>
  We have years of experience eliminating tyre-related issues; our<strong> mobile tyre-fitting Harlow, mobile tyre repair </strong> and  <strong>replacement</strong>  service reduces your tyre-related tension.<br/>
   Our experts serve you at your desired location beyond the limitation of time and place.
<br/>
   We are providing branded tyres for your vehicle according to your needs. Call us today to get the best <strong> tyre service in Harlow.</strong> Our service provider arrives at your location in 30 to 40 minutes. 

    
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
    
      firstHeading='24/7 mobile tyre service Harlow, London.'
      // secondHeading="Mobile Tyre Fitting in & Around Luton"
      img1={About1}
     
     paraOne={paraOneContent}
   
      />
    </>
  )
}

export default Harlow
