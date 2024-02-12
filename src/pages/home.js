import img1 from "../images/bg1.jpg"
import img2 from "../images/bg6.jpg"
import img3 from "../images/bg7.jpg"
import img4 from "../images/r1.jpg"
import img5 from "../images/r2.jpg"
import img6 from "../images/r3.jpg"
import img7 from "../images/r4.jpg"
import img8 from "../images/r5.jpg"
import img9 from "../images/r6.jpg"
import sr1 from "../images/sr1.jpg"
import sr2 from "../images/sr2.jpg"
import sr3 from "../images/sr3.jpg"
import sr4 from "../images/sr4.jpg"
import sr5 from "../images/sr5.jpg"
import sr6 from "../images/sr6.jpg"
import sr7 from "../images/sr7.jpg"
import sr8 from "../images/sr8.jpg"
import sr9 from "../images/sr9.jpg"
import bg1 from "../images/bg1.jpg"
import add from "../images/add.png"


function Home(){
    return(
        <>
        <div className="maindiv">
            {/* carouselslider */}
            <div className="innerslider">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            </div>
             {/* cardimages */}
            <div className="row cardb">
                <div className="col-sm-6">
                <div className="card c1">
                <div className="card-body">
                    <h5 className="card-title">Strawberry Cake</h5>
                    <p className="card-text">Simple & Delicios</p>
                    <a href="#" className="btn btn-primary">See Full Receipe</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card c2">
                    <div className="card-body">
                        <h5 className="card-title">Chinesse Noodles</h5>
                        <p className="card-text">See Full Receipe</p>
                        <a href="#" className="btn btn-primary">See Full Receipe</a>
                    </div>
                    </div>
                </div>
            </div>
            {/* display area */}
            <div className="home3">
            <div className="heading1">
            <h2 >The best Receipies</h2>
            </div>
            <div className="best">
            <div className="r1" >
                <div className="single-best-receipe-area ">
                    <div className="imag">
                    <img src={img4} alt=""/>
                    </div>  
                    <div className="receipe-content">
                    <h5>Sushi Easy Receipy</h5>
                    <div className="ratings">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                    </div>
                    </div>
                </div>
            </div>
            <div className="r1" >
                <div className="single-best-receipe-area ">
                    <div className="imag">
                    <img src={img5} alt=""/>
                    </div>  
                    <div className="receipe-content">
                    <h5>Homemade Burger</h5>
                    <div className="ratings">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                    </div>
                    </div>
                </div>
            </div><div className="r1" >
                <div className="single-best-receipe-area ">
                    <div className="imag">
                    <img src={img6} alt=""/>
                    </div>  
                    <div className="receipe-content">
                    <h5>Vegan Smoothie</h5>
                    <div className="ratings">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                    </div>
                    </div>
                </div>
            </div>

            </div>
            <div className="best2">
            <div className="r1" >
                <div className="single-best-receipe-area ">
                    <div className="imag">
                    <img src={img7} alt=""/>
                    </div>  
                    <div className="receipe-content">
                    <h5>Calabasa Soup</h5>
                    <div className="ratings">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                    </div>
                    </div>
                </div>
            </div>
            <div className="r1" >
                <div className="single-best-receipe-area ">
                    <div className="imag">
                    <img src={img8} alt=""/>
                    </div>  
                    <div className="receipe-content">
                    <h5>Homemade Breakfast</h5>
                    <div className="ratings">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                    </div>
                    </div>
                </div>
            </div><div className="r1" >
                <div className="single-best-receipe-area ">
                    <div className="imag">
                    <img src={img9} alt=""/>
                    </div>  
                    <div className="receipe-content">
                    <h5>Healthy Fruit Desert</h5>
                    <div className="ratings">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                    </div>
                    </div>
                </div>
            </div>

            </div>
            </div>
            {/* //////// */}
            <div className="gluten">
                <div className="textc">
                    <h2>Gluten Free Receipies</h2>
                    <p>Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh</p>
                </div>
            </div>
            {/* smallcomments */}
            <div className="maincom">
            <div className="scomm">
                <div className="comm1">
                    <div className="cimg">
                        <img src={sr1}/>
                    </div>
                    <div className="sc">
                        <span>January 04, 2018</span>
                        <h5>Home made Italian Pasta</h5>
                        <div className="sratings">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                        </div>
                        <p>2 comments</p>
                    </div>
                </div>
                <div className="comm">
                    <div className="cimg">
                        <img src={sr2}/>
                    </div>
                    <div className="sc">
                        <span>January 04, 2018</span>
                        <h5>Baked Bread</h5>
                        <div className="sratings">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                        </div>
                        <p>2 comments</p>
                    </div>
                </div>
                <div className="comm">
                    <div className="cimg">
                        <img src={sr3}/>
                    </div>
                    <div className="sc">
                        <span>January 04, 2018</span>
                        <h5>Scalops on salt</h5>
                        <div className="sratings">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                        </div>
                        <p>2 comments</p>
                    </div>
                </div>
            </div>
            <div className="scomm">
                <div className="comm">
                    <div className="cimg">
                        <img src={sr4}/>
                    </div>
                    <div className="sc">
                        <span>January 04, 2018</span>
                        <h5>Fruits on plate</h5>
                        <div className="sratings">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                        </div>
                        <p>2 comments</p>
                    </div>
                </div>
                <div className="comm">
                    <div className="cimg">
                        <img src={sr5} alt=""/>
                    </div>
                    <div className="sc">
                        <span>January 04, 2018</span>
                        <h5>Macaroons</h5>
                        <div className="sratings">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                        </div>
                        <p>2 comments</p>
                    </div>
                </div>
                <div className="comm">
                    <div className="cimg">
                        <img src={sr6} alt=""/>
                    </div>
                    <div className="sc">
                        <span>January 04, 2018</span>
                        <h5>Chocolate tart</h5>
                        <div className="sratings">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                        </div>
                        <p>2 comments</p>
                    </div>
                </div>
            </div>
            <div className="scomm">
                <div className="comm">
                    <div className="cimg">
                        <img src={sr7} alt=""/>
                    </div>
                    <div className="sc">
                        <span>January 04, 2018</span>
                        <h5>Berry Desert</h5>
                        <div className="sratings">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                        </div>
                        <p>2 comments</p>
                    </div>
                </div>
                <div className="comm">
                    <div className="cimg">
                        <img src={sr8}/>
                    </div>
                    <div className="sc">
                        <span>January 04, 2018</span>
                        <h5>Zucchini Grilled on peper</h5>
                        <div className="sratings">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                        </div>
                        <p>2 comments</p>
                    </div>
                </div>
                <div className="comm">
                    <div className="cimg">
                        <img src={sr9}/>
                    </div>
                    <div className="sc">
                        <span>January 04, 2018</span>
                        <h5>Chicken Salad</h5>
                        <div className="sratings">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                        </div>
                        <p>2 comments</p>
                    </div>
                </div>
            </div> 
            </div> 
            {/* quote area */}
            <div className="quarea">
                <div className="qitem" id="box1">
                    <p id="pid3">"</p>
                    <h4>Nothing is better than going home to family and eating good food and relaxing</h4>
                    <h5>John Smith</h5>
                    <div id="dateq">
                        <p id="pid1">January 04,2018</p>
                        <p id="pid2">2 Comments</p>
                    </div>
                </div>
                <div className="qitem" id="box2">
                    <div>
                        <h4>Subscribe to our newsletter</h4>
                        <img src={bg1} alt=""/>

                    </div>
                </div>
                <div className="qitem" id="box3">
                    <img src={add} alt=""/>
                </div>

            </div>
            


        </div>   
        </>
    );
}

export default Home;

