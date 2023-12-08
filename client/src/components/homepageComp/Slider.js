import React from 'react'
import '../../styles/nav.css';

function Slider() {
  return (
    <div>
      <main>
        <div id="myPageContent" className="container-fluid">
          <section id="slider">
            <div id="textSlider" className="row">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 iamCol">
                <p>We</p>
                <p>Provide</p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 slideCol">
                <div className="scroller">
                  <div className="inner">
                    <p>Cases</p>
                    <p>Support</p>
                    <p>Application</p>
                    <p>Transparency</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Slider
