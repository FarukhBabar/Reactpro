import React from 'react';
import AreasPage from '../AreasPage';
import About1 from '../assets/images/about1.jpg';
import { Helmet } from 'react-helmet';

const StAlbans = () => {
  const paraOneContent = `
    Pro Tyre Fitters provide excellent<strong> mobile tyre service </strong>in<strong>  St. Albans, north London</strong>. Our goal is to solve your tyre problem and make your journey memorable. Our experienced professionals know all the solutions to tyre-related issues. <br/>
    We are available for <strong>24/7 mobile tyre service in St. Albans</strong> , including <strong>mobile tyre fitting, replacement, and repair.</strong> Our service providers will arrive anywhere and reach you in 30 to 40 minutes.<br/>
    Our expert fixes<strong> tyre punctures</strong> more quickly than others due to their vast experience; they also recover the issue of slow leaks in flat tyres and offer a complete<strong> tyre repair service</strong>  for cars, vans, and trucks.<br/>
    We provide branded tyres according to your vehicles and your demand, so don't get anxious. Call us for any <strong>mobile tyre service </strong> or inquiry; we are available to serve you.
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

        firstHeading='24/7 Mobile tyre service St. Albans, London'
        // secondHeading=""
        img1={About1}
        paraOne={paraOneContent}
       
      />
    </>
  );
}

export default StAlbans;
