import React from 'react'
import AreasPage from "../AreasPage";
import About1 from "../assets/images/about1.jpg";
import { Helmet } from 'react-helmet';

const Luton = () => {
   const paraOneContent = `
   
Pro Tyre Fitters offers <strong>24/7 mobile tyre service in Luton </strong> for damaged and weak tyres. We aim to provide you with the best tyre services at your location. We aim to maintain your relief, solve the problem of your tyre and ensure that your journey is smooth.

 <br/>
We provide  <strong> mobile tyre fitting services in Luton,</strong>which deal with diverse types of tyre issues and provide <strong>mobile tyre repair and replacement.</strong>.Our service provider will reach your location in 30 to 40 minutes. 
<br/>

Our well-experienced professionals know all tyre problems and their potential solutions. They can easily handle emergencies and help you resume your journey to your destination. 
<br/>
 We provide the best tyres for your vehicle in affordable costs. Call us for tyre services today and restore your tyre health for a fantastic journey.


    
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
   
      firstHeading='24/7 mobile tyre service Luton, London.'
      // secondHeading="Mobile Tyre Fitting in & Around Luton"
      img1={About1}
       paraOne={paraOneContent}
      />
    </>
  )
}

export default Luton
