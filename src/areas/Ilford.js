import React from 'react'
import AreasPage from "../AreasPage";
import About1 from "../assets/images/about1.jpg";
import { Helmet } from 'react-helmet';

const Ilford = () => {
  const paraOneContent = `
   
Get your required <strong>  mobile tyre service in Ilford, London.</strong> Pro Tyre Fitters offers flawless tyre services that complete your tyre needs and address tyre-related problems. We provide the team efficiently with all other necessary needs. 
 <br/>
 Tyre problems cause you to have a headache anywhere without an alarm. Our expert can handle it easily, from tyre punctures to leaks and blowouts. Our amazing  <strong>24/7 mobile tyre fitting, mobile tyre repair, </strong> and  <strong>mobile tyre replacement service, Ilford</strong> manage your concerns. 
<br/>

Our specialists are well-trained in mobile tyre services and will arrive at your directed location in 30 to 40 minutes. We care for your vehicles, such as vans, trucks and cars.
<br/>
  All the<strong> mobile tyre services Ilford</strong>is available at affordable prices to ease your financial burden. Call us anytime for quick service and also schedule an appointment for the service; our experts are available to serve you.

    
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

      firstHeading='24/7 Mobile tyre service Ilford, London.'
      // secondHeading="Mobile Tyre Fitting in & Around Luton"
      img1={About1}
     paraOne={paraOneContent}
      />
    </>
  )
}

export default Ilford