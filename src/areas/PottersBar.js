import React from 'react'
import AreasPage from "../AreasPage";
import About1 from "../assets/images/about1.png";
import { Helmet } from 'react-helmet';

const PottersBar = () => {
  return (
    <>
    <Helmet>
        <title id='meta-title'>Areas Page</title>
        <meta
          name="description"
          id='meta-description'
          content="Descripion of Areas Page"
        />
        <meta name="robots" content="noindex, unfollow" />
      </Helmet>
      <AreasPage
      mergedHeaderStyle="tr"
      // Text
      pageTitle="Hatfield"
      firstHeading='Amica & Commode Mobile Tyre Fitting Luton.'
      secondHeading="Mobile Tyre Fitting in & Around Luton"
      img1={About1}
      lione='One'
      litwo='Two'
      lithree='Three'
      lifour='Four'
      lifive='Five'
      lisix='Six'
      paraOne='Other mobile fitters may have settled for second place in terms of popularity, but our Olympus Mobile Tyre Fitting staff always strives for first place.'
      thirdHeading='The Best Hassle-free Tyre Services at Your Location.'
      paraTwo='For a prompt service to get your car or van back on the road, we at Olympus Mobile Tyre Fitting need a few vehicle details from you.

      Our tyre fitters aim is to get your tyres fixed or replaced quickly. To book Olympus tyre services, please provide us with the following details:'
      />
    </>
  )
}

export default PottersBar
