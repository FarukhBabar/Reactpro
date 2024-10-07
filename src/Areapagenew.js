import React from 'react'
import { Helmet } from "react-helmet";

const Areapagenew = () => {

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
    <div>
        <img src='/images/new-banner3.jpg' className='newarea' />
         <div className='container'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12 mb-3'>
              <center><img src='/images/maparea.png' className='mapimg' /></center>  
              
              </div>
              <div  className='col-lg-12 col-md-12 col-sm-12 text-center mt-5'>
                <h2>Mobile Tyre Fitting in London</h2>
              </div>
              <div  className='col-lg-3 col-md-3 col-sm-12 '>
                <h4 className='text-danger headingarea'>Hillingdon</h4>
                <ul className='arealist'>
                  <li>West Drayton</li>
                  <li>Hayes</li>
                  <li>Uxbridge</li>
                  <li>Ruislip</li>
                  <li>Northwood</li>
                </ul>
              </div>
               <div  className='col-lg-3 col-md-3 col-sm-12 '>
                <h4 className='text-danger headingarea'>Ealing</h4>
                <ul className='arealist'>
                  <li>Northolt</li>
                  <li>Southall</li>
                  <li>Greenford</li>
                  <li>West London</li>
                  
                </ul>
              </div>
               <div  className='col-lg-3 col-md-3 col-sm-12 '>
                <h4 className='text-danger headingarea'>Hounslow</h4>
                <ul className='arealist'>
                  <li>Feltham</li>
                  <li>Hounslow </li>
                  <li>Brentford</li>
                  <li>Isleworth</li>
                  
                </ul>
              </div>
               <div  className='col-lg-3 col-md-3 col-sm-12 '>
                <h4 className='text-danger headingarea' >Richmond-upon-Thames</h4>
                <ul className='arealist'>
                  <li>Teddington</li>
                  <li>Twickenham</li>
                  <li>Richmond</li>
                 
                </ul>
              </div>
              <div  className='col-lg-3 col-md-3 col-sm-12 '>
                <h4 className='text-danger headingarea'>Wandsworth</h4>
                <ul className='arealist'>
                  <li>Battersea</li>
                  <li>Earlsfield</li>
                  <li>Balham</li>
                </ul>
              </div>
               <div  className='col-lg-3 col-md-3 col-sm-12 '>
                <h4 className='text-danger headingarea'>Harrow</h4>
                <ul className='arealist'>
                  <li>Harrow</li>
                  <li>Stanmore</li>
                  <li>Pinner</li>
                  
                </ul>
              </div>
               <div  className='col-lg-3 col-md-3 col-sm-12 '>
                <h4 className='text-danger headingarea'>Brent</h4>
                <ul className='arealist'>
                  <li>Wembley </li>
                  <li>Brent Park</li>
                  <li>North West London</li>
                  
                </ul>
              </div>
               <div  className='col-lg-3 col-md-3 col-sm-12 '>
                <h4 className='text-danger headingarea' >Hammersmith & Fulham</h4>
                <ul className='arealist'>
                  <li>Fulham</li>
                  <li>Hammersmith</li>
                  <li>White City</li>
                  <li>Sheperd’s Bush</li>
                 
                </ul>
              </div>
              <div  className='col-lg-3 col-md-3 col-sm-12 '>
                <h4 className='text-danger headingarea'>Sutton</h4>
                <ul className='arealist'>
                  <li>Worcester Park</li>
                  <li>Carshalton</li>
                  <li>Sutton</li>
                </ul>
              </div>
               <div  className='col-lg-3 col-md-3 col-sm-12 '>
                <h4 className='text-danger headingarea'>Kingston-upon-Thames</h4>
                <ul className='arealist'>
                  <li>Chessington</li>
                  <li>Surbiton</li>
                  <li>New Malden</li>
                  <li>Kingston</li>
                  
                </ul>
              </div>
               <div  className='col-lg-3 col-md-3 col-sm-12 '>
                <h4 className='text-danger headingarea'>Merton</h4>
                <ul className='arealist'>
                  <li>Morden </li>
                  <li>Mitcham </li>
                  <li>Wimbledon</li>
                  
                </ul>
              </div>
               <div  className='col-lg-3 col-md-3 col-sm-12 '>
                <h4 className='text-danger headingarea' >Kensington & Chelsea</h4>
                <ul className='arealist'>
                  <li>Earls Court</li>
                  <li>Chelsea</li>
                  <li>Kensington</li>
                  <li>Ladbroke Grove</li>
                 
                </ul>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Areapagenew