import React from 'react'

function banner() {
    return (
        <section id="home" className="iq-main-slider p-0 iq-rtl-direction">
        <div id="home-slider" className="slider m-0 p-0">
           <div className="slide slick-bg s-bg-1">
              <div className="container-fluid position-relative h-100">
                 <div className="slider-inner h-100">
                    <div className="row align-items-center h-100 iq-ltr-direction">
                       <div className="col-xl-6 col-lg-12 col-md-12">
                          <a href="/#">
                             <div className="channel-logo" data-animation-in="fadeInLeft" data-delay-in="0.5">
                                <img src="assets/frontend/images/logo.png" className="c-logo" alt="streamit"/>
                             </div>
                          </a>
                          <h1 className="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft"
                             data-delay-in="0.6">bushland</h1>

                             <div className="d-flex flex-wrap align-items-center fadeInLeft animated" data-animation-in="fadeInLeft" style={{opacity: 1}}>
                               <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                                   <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                      <li>
                                         <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                         <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                         <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                         <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                         <i className="fa fa-star-half" aria-hidden="true"></i>
                                      </li>
                                   </ul>
                                   <span className="text-white ml-2">4.7(lmdb)</span>
                                   </div>
                                   <div className="d-flex align-items-center mt-2 mt-md-3">
                                      <span className="badge badge-secondary p-2">18+</span>
                                      <span className="ml-3">2 Seasons</span>
                                   </div>
                           </div>

                          {/* <!-- <div className="d-flex align-items-center" data-animation-in="fadeInUp" data-delay-in="1">
                              
                             <span className="badge badge-secondary p-2">18+</span>
                             <span className="ml-3">2 Seasons</span>
                          </div> --> */}
                          <p data-animation-in="fadeInUp" data-delay-in="1.2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                             dummy text ever since the 1500s.
                          </p>
                          <div className="trending-list" data-wp_object-in="fadeInUp" data-delay-in="1.2">
                           <div className="text-primary title starring">
                               Starring: <span className="text-body">Karen Gilchrist, James Earl Jones</span>
                           </div>
                           <div className="text-primary title genres">
                               Genres: <span className="text-body">Action</span>
                           </div>
                           <div className="text-primary title tag">
                               Tag: <span className="text-body">Action, Adventure, Horror</span>
                           </div>
                       </div>
                          <div className="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.2">
                             <a href="showdetails.html" className="btn btn-hover iq-button"><i className="fa fa-play mr-2"
                                aria-hidden="true"></i>Play Now</a>
                             <a href="showdetails.html" className="btn btn-link">More details</a>
                          </div>
                       </div>
                    </div>
                    <div className="col-xl-5 col-lg-12 col-md-12 trailor-video">
                       <a href="video/trailer.html" className="video-open playbtn">
                          
                          <span className="w-trailor">Watch Trailer</span>
                       </a>
                    </div>
                 </div>
              </div>
           </div>
           <div className="slide slick-bg s-bg-2">
              <div className="container-fluid position-relative h-100">
                 <div className="slider-inner h-100">
                    <div className="row align-items-center  h-100 iq-ltr-direction">
                       <div className="col-xl-6 col-lg-12 col-md-12">
                          <a href="/#">
                             <div className="channel-logo" data-animation-in="fadeInLeft">
                                <img src="assets/frontend/images/logo.png" className="c-logo" alt="streamit"/>
                             </div>
                          </a>
                          <h1 className="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft">sail coaster</h1>
                          
                          <div className="d-flex flex-wrap align-items-center fadeInLeft animated" data-animation-in="fadeInLeft" style={{opacity: 1}}>
                           <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                               <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                                                       <li>
                                   <i className="fa fa-star" aria-hidden="true"></i>
                               </li>
                                                                                       <li>
                                   <i className="fa fa-star" aria-hidden="true"></i>
                               </li>
                                                                                       <li>
                                   <i className="fa fa-star" aria-hidden="true"></i>
                               </li>
                                                                                       <li>
                                   <i className="fa fa-star" aria-hidden="true"></i>
                               </li>
                                                                                           <li>
                                       <i className="fa fa-star-half" aria-hidden="true"></i>
                                   </li>
                                                                                   </ul>
                               <span className="text-white ml-2">4.7(lmdb)</span>
                               </div>
                                                           <div className="d-flex align-items-center mt-2 mt-md-3">
                               <span className="badge badge-secondary p-2">16+</span>
                               <span className="ml-3">2h 40m</span>
                           </div>
                       </div>
                          <p data-animation-in="fadeInUp" data-delay-in="0.7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                             dummy text ever since the 1500s.
                          </p>
                          <div className="trending-list" data-wp_object-in="fadeInUp" data-delay-in="1.2">
                           <div className="text-primary title starring">
                               Starring: <span className="text-body">Karen Gilchrist, James Earl Jones</span>
                           </div>
                           <div className="text-primary title genres">
                               Genres: <span className="text-body">Action</span>
                           </div>
                           <div className="text-primary title tag">
                               Tag: <span className="text-body">Action, Adventure, Horror</span>
                           </div>
                       </div>
                          <div className="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1">
                             <a href="moviedetails.html" className="btn btn-hover iq-button"><i className="fa fa-play mr-2"
                                aria-hidden="true"></i>Play Now</a>
                             <a href="moviedetails.html" className="btn btn-link">More details</a>
                          </div>
                       </div>
                    </div>
                    <div className="col-xl-5 col-lg-12 col-md-12 trailor-video">
                       <a href="video/trailer.html" className="video-open playbtn">
                          
                          <span className="w-trailor">Watch Trailer</span>
                       </a>
                    </div>
                 </div>
              </div>
           </div>
           <div className="slide slick-bg s-bg-3">
              <div className="container-fluid position-relative h-100">
                 <div className="slider-inner h-100">
                    <div className="row align-items-center  h-100 iq-ltr-direction">
                       <div className="col-xl-6 col-lg-12 col-md-12">
                          <a href="/#">
                             <div className="channel-logo" data-animation-in="fadeInLeft">
                                <img src="assets/frontend/images/logo.png" className="c-logo" alt="streamit"/>
                             </div>
                          </a>
                          <h1 className="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft">the army</h1>
                          
                          <div className="d-flex flex-wrap align-items-center fadeInLeft animated" data-animation-in="fadeInLeft" style={{opacity: 1}}>
                           <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                               <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                                                       <li>
                                   <i className="fa fa-star" aria-hidden="true"></i>
                               </li>
                                                                                       <li>
                                   <i className="fa fa-star" aria-hidden="true"></i>
                               </li>
                                                                                       <li>
                                   <i className="fa fa-star" aria-hidden="true"></i>
                               </li>
                                                                                       <li>
                                   <i className="fa fa-star" aria-hidden="true"></i>
                               </li>
                                                                                           <li>
                                       <i className="fa fa-star-half" aria-hidden="true"></i>
                                   </li>
                                                                                   </ul>
                               <span className="text-white ml-2">4.7(lmdb)</span>
                               </div>
                                                           <div className="d-flex align-items-center mt-2 mt-md-3">
                               <span className="badge badge-secondary p-2">20+</span>
                               <span className="ml-3">3h</span>
                           </div>
                       </div>

                          
                          <p data-animation-in="fadeInUp" data-delay-in="1.2" className="fadeInUp animated" style={{'opacity': '1', 'animation-delay': '1.2s'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                             dummy text ever since the 1500s.
                          </p>  
                          <div className="trending-list" data-wp_object-in="fadeInUp" data-delay-in="1.2">
                           <div className="text-primary title starring">
                               Starring: <span className="text-body">Karen Gilchrist, James Earl Jones</span>
                           </div>
                           <div className="text-primary title genres">
                               Genres: <span className="text-body">Action</span>
                           </div>
                           <div className="text-primary title tag">
                               Tag: <span className="text-body">Action, Adventure, Horror</span>
                           </div>
                       </div>
                          <div className="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1">
                             <a href="moviedetails.html" className="btn btn-hover iq-button"><i className="fa fa-play mr-2"
                                aria-hidden="true"></i>Play Now</a>
                             <a href="moviedetails.html" className="btn btn-link">More details</a>
                          </div>
                       </div>
                    </div>
                    <div className="col-xl-5 col-lg-12 col-md-12 trailor-video">
                       <a href="video/trailer.html" className="video-open playbtn">
                          
                          <span className="w-trailor">Watch Trailer</span>
                       </a>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
           <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44px" height="44px" id="circle"
              fill="none" stroke="currentColor">
              <circle r="20" cy="22" cx="22" id="test"></circle>
           </symbol>
        </svg>
     </section>
    )
}

export default banner
