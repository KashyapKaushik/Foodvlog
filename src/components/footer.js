import img1 from "../images/insta1.jpg"
import img2 from "../images/insta2.jpg"
import img3 from "../images/insta3.jpg"
import img4 from "../images/insta4.jpg"
import img5 from "../images/insta5.jpg"
import img6 from "../images/insta6.jpg"
import img7 from "../images/insta7.jpg"
import img8 from "../images/logo.png"
function Footer (){
    return(
        <>
        
        <div className="container-fluid footer-main p-0">
            <div className="container-fluid p-0">
            <div className="bg-grey border border-grey border-start-2"></div>

            </div>
            <div className="container-fluid p-0">    
            <div className=" col-12 heading">
                <h5>Follow us on Instagram<i className="ri-instagram-fill"></i></h5>
            </div>
            </div>
            {/* <div className="container-fluid p-0"> */}
            <div className="image-slide">
                <div >
                <img className="instaimg" src={img1} alt="img1" />
                </div>
                <div >
                <img className="instaimg" src={img2} alt="img1" />
                </div>
                <div >
                <img className="instaimg" src={img3} alt="img1" />
                </div>
                <div >
                <img className="instaimg" src={img4} alt="img1" />
                </div>
                <div >
                <img className="instaimg" src={img5} alt="img1" />
                </div>
                <div >
                <img className="instaimg" src={img6} alt="img1" />
                </div>
                <div >
                <img className="instaimg" src={img7} alt="img1" />
                </div>
            </div>
            {/* </div> */}
            <div className="container-fluid ">
            <div className="row bottom">
            <div className="col-12 col-lg-4 r">
            <i className="ri-pinterest-fill"></i>
            <i className="ri-facebook-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-dribbble-line"></i>
            <i className="ri-behance-fill"></i>
            <i className="ri-linkedin-fill"></i>
            </div> 
            <div className="col-12 col-lg-3 ">
            <a className="navbar-brand" href="#">
            <img className="logo1" src={img8} alt="logo"/>
            </a>
            </div>
            <div className="col-12 col-lg-5">
                <h6>Copyright ©2024 All rights reserved | This template is made with by <i className="ri-bear-smile-fill"></i>Kaushik</h6>
            </div>

            </div>
            </div>
        </div>
        </>
    );
}

export default Footer;