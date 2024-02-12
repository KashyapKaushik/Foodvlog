import React from 'react'
import ic1 from '../images/salad.png'
import ic2 from '../images/pancake.png'
import ic3 from '../images/hamburger.png'
import ic4 from '../images/rib.png'
import ss1 from '../images/ss1.png'
import ss2 from '../images/ss2.png'
import ss3 from '../images/ss3.png'
import ss4 from '../images/ss4.png'
import ib1 from '../images/hamburger2.png'
import ib2 from '../images/pizza.png'
import ib3 from '../images/cake2.png'


const Element = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row col-12 elp1'>
                        <h4>Elements</h4>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 mb-4'>
                            <h2>Buttons</h2>
                        </div>
                        <div className='col-12 bttnn'>
                            <button className="btn delicious-btn" type="submit">See Receipe</button>
                            <button className="btn delicious-btn  ms-3" type="submit">See Receipe</button>
                            <button className="btn delicious-btn  ms-3" type="submit">See Receipe</button>
                            <button className="btn delicious-btn  ms-3" type="submit">See Receipe</button>

                        </div>
                        {/* ..Accordianstab */}
                        <div className='col-12 bttnn'>
                            <h2>Accordians & Tabs</h2>
                        </div>
                        <div className='col-12 col-lg-6 mb-5'>
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            Aenean hendrerit varius massa quis laoreet
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo quis facilisis.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Hendrerit varius massa quis laoreet
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo quis facilisis.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Aenean hendrerit varius massa quis laoreet
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo quis facilisis.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-12 col-lg-6 mb-5'>
                            {/* <div className='navbtn'>
                            <button className="btn delicious-btn" type="submit">Varius massa</button>
                            <button className="btn delicious-btn  ms-3" type="submit">Hendrerit varius</button>
                            <button className="btn delicious-btn  ms-3" type="submit">Aenean hendrerit</button>
                            </div> */}
                            <div className="delicious-tabs-content">
                                <ul className="nav nav-tabs bttnn" id="myTab" role="tablist">
                                    <li className="nav-item aid">
                                        <a className="nav-link active show" id="tab--1" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Varius massa</a>
                                    </li>
                                    <li className="nav-item aid">
                                        <a className="nav-link " id="tab--2" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Hendrerit varius</a>
                                    </li>
                                    <li className="nav-item aid">
                                        <a className="nav-link " id="tab--3" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Aenean hendrerit</a>
                                    </li>
                                </ul>

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade active show" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                                        <div className="delicious-tab-content">

                                            <div className="delicious-tab-text">
                                                <p>Integer nec bibendum lacus. Praesent malesuada congue, Suspendisse dictum enim sit amet libero malesu ada feugiat. Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend. Praesent malesuada congue.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab--2">
                                        <div className="delicious-tab-content">

                                            <div className="delicious-tab-text">
                                                <p>Integer nec bibendum lacus. Praesent malesuada congue, Suspendisse dictum enim sit amet libero malesu ada feugiat. Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend. Praesent malesuada congue.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab--3">
                                        <div className="delicious-tab-content">

                                            <div className="delicious-tab-text">
                                                <p>Integer nec bibendum lacus. Praesent malesuada congue, Suspendisse dictum enim sit amet libero malesu ada feugiat. Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend. Praesent malesuada congue.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-12 '>
                            <h2>Milestone</h2>
                        </div>
                        <div className='col-12 bttnn'>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-lg-3'>
                                <div className="icon1">
                                <img src={ic1} alt="" />
                                <p>1287</p>
                                <h6>Amazing receipies</h6>
                                </div>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3'>
                                <div className="icon1">
                                <img src={ic3} alt="" />
                                <p>25</p>
                                <h6>Burger receipies</h6>
                                </div>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3'>
                                <div className="icon1">
                                <img src={ic4} alt="" />
                                <p>471</p>
                                <h6>Meat receipies</h6>
                                </div>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3'>
                                <div className="icon1">
                                <img src={ic2} alt="" />
                                <p>326</p>
                                <h6>Desert receipies</h6>
                                </div>
                                </div>

                            </div>

                        </div>
                        <div className='col-12 '>
                            <h2>Loaders</h2>
                        </div>
                        <div className='col-12 loadermain bttnn'>
                            <div className='row loader'>
                                <div className='col-12 col-sm-6 col-lg-3'>
                                    <img src={ss1} alt='ss' />
                                    <h6>Receipies</h6>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3'>
                                    <img src={ss2} alt='ss' />
                                    <h6>Pure Love</h6>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3'>
                                    <img src={ss3} alt='ss' />
                                    <h6>Creativity</h6>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3 '>
                                    <img src={ss4} alt='ss' />
                                    <h6>Passion</h6>
                                </div>

                            </div>

                        </div>
                        <div className='col-12 '>
                            <h2>Icon Boxes</h2>
                        </div>
                        <div className='col-12 iconbox'>
                            <div className='row'>
                            <div className='col-12  col-sm-6 col-lg-4 icc' >
                                <div className='icbox1'>
                                <img src={ib1} />
                                <h6>Amazing Recipies</h6>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor.</p>

                            </div>
                            <div className='col-12  col-sm-6 col-lg-4 icc' >
                                <div className='icbox1'>
                                <img src={ib2} />
                                <h6>Italian Food</h6>
                                </div>
                                <p>Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibu.</p>

                            </div>
                            <div className='col-12  col-sm-6 col-lg-4 icc' >
                                <div className='icbox1'>
                                <img src={ib3} />
                                <h6>Sweets & Cakes</h6>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor.</p>

                            </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Element
