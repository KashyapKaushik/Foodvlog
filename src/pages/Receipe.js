import React from 'react'
import rc1 from '../images/breadcumb3.jpg'
import rc2 from '../images/bg5.jpg'

const Receipe = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='container recimg'>
                    <div className='row col-12 col-lg-12 rec1'>
                        <h4>Receipe</h4>
                    </div>

                </div>
                <div className='container recpart2'>
                    <div className='row col-12'>
                        <div id="carouselExampleIndicators" className="carousel slide clrs" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={rc2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={rc2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={rc2} className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
                <div className='container recpart3'>
                    <div className='row'>
                        <div className='col-12 col-lg-8 recwrite'>
                            <p>April 05, 2018</p>
                            <h2>Vegetarian cheese salad</h2>
                            <h6>Prep: 15 mins<br/>Cook: 30mins<br/>Yields: 8 Servings</h6>

                        </div>
                        <div className='col-12 col-lg-4'>
                            <div className="sratings newrate">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                            </div>
                            <div className='begginers'>
                            <a className="bttn" href='#'>For Begginers</a>
                            </div>

                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-8 txpart'>
                            <div className='r2part1'>
                                <h4>01.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                            </div>
                            <div className='r2part2'>
                                <h4>02.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                            </div>
                            <div className='r2part2'>
                                <h4>03.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                            </div>
                            <div className='r2part2'>
                                <h4>04.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                            </div>

                        </div>
                        <div className='col-12 col-lg-4 checkboxp'>
                            <h2>Ingredients</h2>
                            <div className='checkbb'>
                                <input type='checkbox' id='ccheck1'/>
                                <label>4 Tbsp (57 gr) butter</label>
                            </div>
                            <div className='checkbb'>
                                <input type='checkbox' id='ccheck1'/>
                                <label>2 large eggs</label>
                            </div>
                            <div className='checkbb'>
                                <input type='checkbox' id='ccheck1'/>
                                <label>2 yogurt containers granulated sugar</label>
                            </div>
                            <div className='checkbb'>
                                <input type='checkbox' id='ccheck1'/>
                                <label>1 vanilla or plain yogurt, 170g container</label>
                            </div>
                            <div className='checkbb'>
                                <input type='checkbox' id='ccheck1'/>
                                <label>2 yogurt containers unbleached white flour</label>
                            </div>
                            <div className='checkbb'>
                                <input type='checkbox' id='ccheck1'/>
                                <label>1.5 yogurt containers milk</label>
                            </div>
                            <div className='checkbb'>
                                <input type='checkbox' id='ccheck1'/>
                                <label>1/4 tsp cinnamon</label>
                            </div>
                            <div className='checkbb'>
                                <input type='checkbox' id='ccheck1'/>
                                <label>1 cup fresh blueberries</label>
                            </div>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Leave a Comment</h3>
                        </div>
                    </div>
                    <div class="row formrow m-0">
                    <div class="col-12">
                        <div class="contact-form-area">
                            <form action="#" method="post">
                                <div class="row finput">
                                    <div class="col-12 col-lg-6">
                                        <input type="text" class="form-control px-3 py-4" id="name" placeholder="Name"/>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <input type="email" class="form-control px-3 py-4" id="email" placeholder="E-mail"/>
                                    </div>
                                    <div class="col-12 mt-4">
                                        <input type="text" class="form-control px-3 py-4" id="subject" placeholder="Subject"/>
                                    </div>
                                    <div class="col-12 mt-4">
                                        <textarea name="message" class="form-control px-3 py-4" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                    </div>
                                    <div class="col-12 mt-5">
                                        <button class="btn delicious-btn mt-30" type="submit">Post Comments</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                    {/* <div className='row'>
                        <div className='col-12'>
                            <form method='post' action=''>
                                <div className='row'>
                                    <div className='col-12 col-lg-6'>
                                        <input type='text' placeholder='Name' id='name'/>
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <input type='text' placeholder='E-mail' id='email'/>
                                    </div>
                                    <div className='col-12'>
                                        <input type='text' placeholder='Subjects' id='subject'/>
                                    </div>
                                    <div className='col-12'>
                                        <textarea name='message' placeholder='Message' rows='10' cols='30'></textarea>
                                    </div>
                                    <div className='col-12'>
                                       <button className='btnsub' type='submit'>Post Comments</button>
                                    </div>

                                </div>
                            </form>

                        </div>

                    </div> */}

                </div>


            </div>
        </>
    )
}

export default Receipe
