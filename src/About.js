import React from 'react'

export default class About extends React.Component
{
    constructor(props){
        super(props)
    }

    render()
    {
        return <>
        <section class="section about-me" data-section="section1">
        <div class="container">
          <div class="section-heading">
            <h2>About Donation</h2>
            <div class="line-dec"></div>            
          </div>
          <div class="left-image-post">
            <div class="row">
              <div class="col-md-6">
                <div class="left-image">
                  <img src="assets/images/left-image.jpg" alt="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="right-text">
                  <h4>Donation</h4>
                  <p>
                  Blood donation is a voluntary procedure that can help save the lives of others. There are several types of blood donation. Each type helps meet different medical needs.
                  </p>                  
                </div>
              </div>
            </div>
          </div>
          <div class="right-image-post">
            <div class="row">
              <div class="col-md-6">
                <div class="left-text">
                  <h4>Risks</h4>
                  <p>
                  Blood donation is safe. New, sterile disposable equipment is used for each donor, so there's no risk of contracting a bloodborne infection by donating blood.

If you're a healthy adult, you can usually donate a pint (about half a liter) of blood without endangering your health. Within a few days of a blood donation, your body replaces the lost fluids. And after two weeks, your body replaces the lost red blood cells.
                  </p>                 
                </div>
              </div>
              <div class="col-md-6">
                <div class="right-image">
                  <img src="assets/images/right-image.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        </>
    }
}