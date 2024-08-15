import React from 'react';
import AreasPage from '../AreasPage';
import About1 from '../assets/images/about1.jpg';
import { Helmet } from 'react-helmet';

const Edmonton = () => {
  const paraOneContent = `
    Pro Tyre Fitters offers<strong>mobile tyre service in Edmonton, London.</strong>. These services ensure your vehicle is fully prepared for the ride or rescue you in an emergency. We have a well-experienced service provider who can serve you anywhere in Edmonton. <br/>
   Tyre issues gradually become trouble for you, so tackling the problem before the accident is necessary. Our experts are available to provide <strong> 24/7 mobile tyre services in Edmonton, </strong> ,including  <strong>mobile tyre fitting, mobile tyre repair and mobile tyre replacement.</strong> at your directed location.<br/>
   We want to be your car, van, and truck caretaker during your journey. We will cover all major to minor problems and ensure the issue does not reappear. Our professionals will arrive at your location in 30 to 40 minutes. <br/>
    With amazing<strong> tyre services</strong>  we also provide branded tyres that cover your vehicle's needs. Call us anytime for exceptional <strong> mobile tyre service in Edmonton.</strong> . Our professionals are always ready to solve your problem and resume your journey towards the destination.
    
  `;

  return (
    <>
      <Helmet>
        <title id='meta-title'>Areas Page</title>
        <meta
          name="description"
          id='meta-description'
          content="Description of Areas Page"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <AreasPage
        mergedHeaderStyle="tr areas"
        // Text
      
        firstHeading='24/7 Mobile tyre service Edmonton, London'
        // secondHeading=""
        img1={About1}
        paraOne={paraOneContent}
       
      />
    </>
  );
}

export default Edmonton;
