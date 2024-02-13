import React from 'react'
import bm1 from '../images/1.jpg'
import bm2 from '../images/2.jpg'
import bm3 from '../images/3.jpg'
import bg1 from '../images/bg1.jpg'



function Blogpost() {
  return (
    <>
  
    <div className="container-fluid bimg ">
      <h4>Blog</h4>
    </div>
    <div className="container fluidblogpage">
      <div className="row">
      <div className="col-12 col-lg-8 part1">  
      <div className="bim1">
        <img src={bm1} alt=""/>
      </div>
      <div className="bim2">
        <a id="bi2" href='#'>How to find amazing restaurants in your city</a>
        <div id="bi" className="bim3">by<a href='#'> Maria Williams </a> in <a href='#'>Restaurant</a>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <a className="bttn" href='#'>Read more</a>
      </div>
      <div className="bim1 nbb1">
        <img src={bm2} alt=""/>
      </div>
      <div className="bim2">
        <a id="bi2" href='#'>10 tips to live a healthy life</a>
        <div id="bi" className="bim3">by<a href='#'> Maria Williams </a> in <a href='#'>Restaurant</a>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <a className="bttn" href='#'>Read moree</a>
      </div>
      <div className="bim1 nbb1">
        <img src={bm3} alt=""/>
      </div>
      <div className="bim2">
        <a id="bi2" href='#'>5 tips on how to cookthe best hamburger</a>
        <div id="bi" className="bim3">by<a href='#'> Maria Williams </a> in <a href='#'>Restaurant</a>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <a className="bttn" href='#'>Read more</a>
      </div>

      </div>
      <div className="col-12 col-lg-4 part2">
        <div className="archive">
          <h6>Archive</h6>
          <ul className="list">
            <li><a href="#">March 2018</a></li>
            <li><a href="#">February 2018</a></li>
            <li><a href="#">Januaray 2018</a></li>
            <li><a href="#">December 2018</a></li>
            <li><a href="#">November 2018</a></li>
          </ul>

        </div>     
        <div className="cat">
          <h6>Categories</h6>
          <ul className="list">
            <li><a href="#">Resturant</a></li>
            <li><a href="#">Food & Drinks</a></li>
            <li><a href="#">Vegan</a></li>
            <li><a href="#">Event & Lifestyle</a></li>
            <li><a href="#">Uncategorized</a></li>
          </ul>

        </div>
        <div className="qitem" id="box2">
          <div>
            <h4>Newsletter</h4>
              {/* <img src={bg1} alt=""/> */}
              <div className='contactiii box22'>
              <div className='contactform'>
                <div className='nnn'>
                  <form action="#" method="post">
                    <input type="email" name="email" placeholder="Subscribe to newsletter" />
                    <button type="submit" class="btn delicious-btn w-100">Subscribe</button>
                  </form>
                  <p>Fusce nec ante vitae lacus aliquet vulputate. Donec sceleri sque accumsan molestie.</p>

                </div>
              </div>
              </div>

          </div>
        </div>
        <div className="pqr" id="">
                    <p id="pi3">"</p>
                    <h4>Nothing is better than going home to family and eating good food and relaxing</h4>
                    <h5>John Smith</h5>
                    <div id="comi">
                        <p id="dp">January 04,2018</p>
                        <p id="cp">2 Comments</p>
        </div>


        </div>

      </div>
      </div>  
    </div>
    </>
  )
}

export default Blogpost