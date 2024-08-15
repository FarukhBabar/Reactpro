import React from 'react'
import AreasPage from "../AreasPage";
import About1 from "../assets/images/about1.jpg";
import { Helmet } from 'react-helmet';

const Wangsted = () => {
  const paraOneContent = `
   
Reduce your tyre-related stress with our tyre specialist. Wanstead is a busy city in London and hard to drive. We provide outstanding<strong> mobile tyre services in Wanstead </strong>to make your travel easy. We understand the value of a commute and how tyre problems destroy the essence of traveling. 


 <br/>
ProTyre Fitters aims to provide unbeatable tyre service to its customers. We design our company with experienced professionals who can easily tackle tyre-related problems. We also provide branded tyres and updated tools and kits. 
<br/>

We cover all minor to major issues related to your vehicle's tyre, whether a van, small truck, or car. Our service providers are available 24 hours a day, 7 days a week, to resolve tyre-related problems and provide <strong>mobile tyre fitting, mobile tyre repair, or mobile tyre replacement </strong>  services.
<br/>
 Call us anytime for<strong>  mobile tyre services in Wanstead, London.</strong> Our professionals arrive in 30 to 40 minutes to provide the required service. 
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
    
      firstHeading='24/7 Mobile tyre service Wanstead, London'
      // secondHeading="Mobile Tyre Fitting in & Around Luton"
      img1={About1}
      paraOne={paraOneContent}
      />
    </>
  )
}

export default Wangsted
