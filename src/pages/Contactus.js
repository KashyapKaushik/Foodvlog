import React from 'react'
import cu1 from '../images/logo.png'
import bg1 from '../images/bg1.jpg'

const Contactus = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row col-12 cupart1'>
            <h4>Recipe</h4>
          </div>
        </div>
        <div className='container'>
        <div className='row col-12 cupart3 '>
            <img src={cu1} alt='' />
          </div>

        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-5 contactiii  cupart2'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus.</p>
              <p>Orci varius natoque penatibus et magnis dis ac pellentesque tortor. Aenean congue parturient montes, nascetur ridiculus mus.</p>
            </div>
            <div className='col-12 col-lg-3 contactiii cupart4'>
              <div>
                <h6>Address</h6>
                <p>481 Creekside Lane Avila<br />Beach, CA 93424
                </p>
              </div>
              <div>
                <h6>Phone</h6>
                <p>+53 345 7953 32453<br />+53 345 7557 822112
                </p>
              </div>
              <div>
                <h6>Email</h6>
                <p>yourmail@gmail.com
                </p>
              </div>

            </div>
            <div className='col-12 col-lg-4 contactiii'>
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
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h3>Get In Touch</h3>
            </div>
          </div>
          <div class="row formrow m-0">
            <div class="col-12">
              <div class="contact-form-area">
                <form action="#" method="post">
                  <div class="row finput">
                    <div class="col-12 col-lg-6">
                      <input type="text" class="form-control px-3 py-4" id="name" placeholder="Name" />
                    </div>
                    <div class="col-12 col-lg-6">
                      <input type="email" class="form-control px-3 py-4" id="email" placeholder="E-mail" />
                    </div>
                    <div class="col-12 mt-4">
                      <input type="text" class="form-control px-3 py-4" id="subject" placeholder="Subject" />
                    </div>
                    <div class="col-12 mt-4">
                      <textarea name="message" class="form-control px-3 py-4" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>
                    <div class="col-12 mt-5 cusent">
                      <button class="btn delicious-btn text-center mt-30 " type="submit">Sent</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Contactus
