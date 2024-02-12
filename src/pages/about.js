import ic1 from '../images/salad.png'
import ic2 from '../images/pancake.png'
import ic3 from '../images/hamburger.png'
import ic4 from '../images/rib.png'

function About() {
    return (
        <>
            <div className="aboutdiv">
                <div className="aboutimg ">
                    <h4>About Us</h4>
                </div>
                <div className="about2">
                    <div className="text1">
                        <h3>Who we are and what we do?</h3>
                    </div>
                    <div className="text2">
                        <h6>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</h6>
                    </div>
                    <div className="text3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean hendrerit varius massa quis laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                    </div>
                    <div className="icond">
                        <div className="icon1">
                            <img src={ic1} alt="" />
                            <p>1287</p>
                            <h6>Amazing receipies</h6>
                        </div>
                        <div className="icon1">
                            <img src={ic3} alt="" />
                            <p>25</p>
                            <h6>Burger receipies</h6>
                        </div>
                        <div className="icon1">
                            <img src={ic4} alt="" />
                            <p>571</p>
                            <h6>Meat receipies</h6>
                        </div>
                        <div className="icon1">
                            <img src={ic2} alt="" />
                            <p>326</p>
                            <h6>Desert receipies</h6>
                        </div>

                    </div>
                    <div className="fries">

                    </div>
                    <div className="text3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean hendrerit varius massa quis laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                    </div>
                    <div className="contactus">
                        <h3>Contact us</h3>
                    </div>
                    <div className="kuchbhi">
                    <div className='container'>
                    <div class="row">
                    <div class="col-12">
                    <div class="contact-form-area">
                        <form action="#" method="post">
                            <div class="row">
                                <div class="col-12 col-lg-6">
                                    <input type="text" class="form-control" id="name" placeholder="Name"/>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <input type="email" class="form-control" id="email" placeholder="E-mail"/>
                                </div>
                                <div class="col-12">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                                </div>
                                <div class="col-12">
                                    <textarea name="message" class="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                </div>
                                <div class="col-12 text-center cbtn">
                                    <button class="btn delicious-btn mt-30" type="submit">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                        
                    </div>
                    </div>
                </div>


            </div>
        </>
    );

}

export default About;