import React,{useState} from 'react'

import "./frontend/css/flatpickr.min.css";
import "./frontend/css/bootstrap.min.css";
import "./frontend/css/all.min.css";
import "./frontend/css/animate.min.css";
import "./frontend/css/remixicon.css";
import "./frontend/css/magnific-popup.css";
import "./frontend/css/dark.css";
import "./frontend/css/owl.carousel.min.css";
import "./frontend/css/select2-bootstrap4.min.css";
import "./frontend/css/select2.min.css";
import "./frontend/css/slick-animation.css";
import "./frontend/css/slick-theme.css";
import "./frontend/css/slick.css";
import "./frontend/css/typography.css";
import "./frontend/css/typography-rtl.css";
import "./frontend/css/spacer.css";
import "./frontend/css/style.css";
import "./frontend/css/responsive.css";
import "./frontend/css/variable.css" ;

 function Header() {
   const [isActive, setActive] = useState("false");
 
   const handleToggle = () => {
     setActive(!isActive);
   }
 

    return (
<header id="main-header">
    <div className="main-header">
       <div className="container-fluid">
          <div className="row">
             <div className="col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                   <a href="/#" className="navbar-toggler c-toggler" data-toggle="collapse"
                      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                      <div className="navbar-toggler-icon" data-toggle="collapse">
                         <span className="navbar-menu-icon navbar-menu-icon--top"></span>
                         <span className="navbar-menu-icon navbar-menu-icon--middle"></span>
                         <span className="navbar-menu-icon navbar-menu-icon--bottom"></span>
                      </div>
                   </a> 
                   <a className="navbar-brand" href="https://templates.iqonic.design/streamit/laravel/public"> <img className="img-fluid logo" src="assets/frontend/images/logo.png"
                       alt ="streamit" /> </a> 
                       <div className="mobile-more-menu">
                      <a href="/#" className="more-toggle" id="dropdownMenuButton"
                         data-toggle="more-toggle"  aria-expanded="false">
                      <i className="ri-more-line"></i>
                      </a>
                      <div className="more-menu" aria-labelledby="dropdownMenuButton">
                         <div className="navbar-right position-relative">
                            <ul className="d-flex align-items-center justify-content-end list-inline m-0">
                               <li>
                                  <a href="/#" className="search-toggle">
                                  <i className="ri-search-line"></i>
                                  </a>
                                  <div className="search-box iq-search-bar">
                                     <form  className="searchbox">
                                        <div className="form-group position-relative">
                                           
                                           <i className="search-link ri-search-line"></i>
                                        </div>
                                     </form>
                                  </div>
                               </li>
                               <li className="nav-item nav-icon">
                                  <a href="/#" className="search-toggle position-relative">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22"
                                        height="22" className="noti-svg">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                           d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
                                     </svg>
                                     <span className="bg-danger dots"></span>
                                  </a>
                                  <div className="iq-sub-dropdown">
                                     <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body">
                                           <a href="/#" className="iq-sub-card">
                                              <div className="media align-items-center">
                                                 <img src="assets/frontend/images/notify/thumb-1.jpg" className="img-fluid mr-3"
                                                    alt="streamit" />
                                                 <div className="media-body">
                                                    <h6 className="mb-0 ">Boop Bitty</h6>
                                                    <small className="font-size-12"> just now</small>
                                                 </div>
                                              </div>
                                           </a>
                                           <a href="/#" className="iq-sub-card">
                                              <div className="media align-items-center">
                                                 <img src="assets/frontend/images/notify/thumb-2.jpg" className="img-fluid mr-3"
                                                    alt="streamit" />
                                                 <div className="media-body">
                                                    <h6 className="mb-0 ">The Last Breath</h6>
                                                    <small className="font-size-12">15 minutes ago</small>
                                                 </div>
                                              </div>
                                           </a>
                                           <a href="/#" className="iq-sub-card">
                                              <div className="media align-items-center">
                                                 <img src="assets/frontend/images/notify/thumb-3.jpg" className="img-fluid mr-3"
                                                    alt="streamit" />
                                                 <div className="media-body">
                                                    <h6 className="mb-0 ">The Hero Camp</h6>
                                                    <small className="font-size-12">1 hour ago</small>
                                                 </div>
                                              </div>
                                           </a>
                                        </div>
                                     </div>
                                  </div>
                               </li>
                               <li className="">
                                  <a href="/#" className="iq-user-dropdown search-toggle d-flex align-items-center ">
                                  <img src="assets/frontend/images/user/user.jpg" className="img-fluid avatar-40 rounded-circle"
                                     alt="user"></img>
                                  </a>
                                  <div className="iq-sub-dropdown iq-user-dropdown ">
                                     <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 pl-3 pr-3">
                                           <a href="manageprofile.html" className="iq-sub-card setting-dropdown">
                                              <div className="media align-items-center">
                                                 <div className="right-icon">
                                                    <i className="ri-file-user-line text-primary"></i>
                                                 </div>
                                                 <div className="media-body ml-3">
                                                    <h6 className="mb-0 ">Manage Profile</h6>
                                                 </div>
                                              </div>
                                           </a>
                                           <a href="settings.html" className="iq-sub-card setting-dropdown">
                                              <div className="media align-items-center">
                                                 <div className="right-icon">
                                                    <i className="ri-settings-4-line text-primary"></i>
                                                 </div>
                                                 <div className="media-body ml-3">
                                                    <h6 className="mb-0 ">Settings</h6>
                                                 </div>
                                              </div>
                                           </a>
                                           <a href="pricingplan1.html" className="iq-sub-card setting-dropdown">
                                              <div className="media align-items-center">
                                                 <div className="right-icon">
                                                    <i className="ri-settings-4-line text-primary"></i>
                                                 </div>
                                                 <div className="media-body ml-3">
                                                    <h6 className="mb-0 ">Pricing Plan</h6>
                                                 </div>
                                              </div>
                                           </a>
                                           
                                        </div>
                                     </div>
                                  </div>
                               </li>
                            </ul>
                         </div>
                      </div>
                   </div>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <div className="menu-main-menu-container">
                         <ul id="top-menu" className="navbar-nav ml-auto">
                            <li className="menu-item ">
                               <a href="https://templates.iqonic.design/streamit/laravel/public">Home</a>
                            </li>
                            <li className="menu-item">
                               <a href="movie.html">Movies</a>
                            </li> 
                            <li className="menu-item">
                               <a href="show.html">Tv Shows</a>
                            </li>  
                            <li className="menu-item">
                                    <a href="/#">Blog</a>
                                    <ul className="sub-menu">
                                       <li className="menu-item"><a href="blog.html">Blog</a></li>
                                       <li className="menu-item"><a href="blogdetails.html">Blog details</a></li>
                                    </ul>
                              </li>                                                            
                            
                            <li className="menu-item">
                               <a href="/#">Pages</a>
                               <ul className="sub-menu">
                                  <li className="menu-item"><a href="about.html">About Us</a></li>
                                  <li className="menu-item "><a href="contact.html">Contact</a></li>
                                  <li className="menu-item"><a href="faq.html">FAQ</a></li>
                                  <li className="menu-item"><a href="privacypolicy.html">Privacy-Policy</a></li>
                                  <li className="menu-item"><a href="/#">Pricing</a>
                                  <ul className="sub-menu">
                                     <li className="menu-item"><a href="pricingplan1.html">Pricing Plan 1</a></li>
                                     <li className="menu-item"><a href="pricingplan2.html">Pricing Plan 2</a></li>
                                  </ul>
                               </li>
                               </ul>
                            </li>
                         </ul>
                      </div>
                   </div>
                   
                   <div className="navbar-right menu-right">
                      <ul className="d-flex align-items-center list-inline m-0">
                         <li className="nav-item nav-icon">
                            <a href="/#" className="search-toggle device-search">
                            <i className="ri-search-line"></i>
                            </a>
                            
                         </li>
                         <li className="nav-item nav-icon">
                            <a href="/#" className="search-toggle" data-toggle="search-toggle">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"
                                  className="noti-svg">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                     d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
                               </svg>
                               <span className="bg-danger dots"></span>
                            </a>
                            <div className="iq-sub-dropdown">
                               <div className="iq-card shadow-none m-0">
                                  <div className="iq-card-body">
                                     <a href="/#" className="iq-sub-card">
                                        <div className="media align-items-center">
                                           <img src="assets/frontend/images/notify/thumb-1.jpg" className="img-fluid mr-3"
                                              alt="streamit" />
                                           <div className="media-body">
                                              <h6 className="mb-0 ">Boot Bitty</h6>
                                              <small className="font-size-12"> just now</small>
                                           </div>
                                        </div>
                                     </a>
                                     <a href="/#" className="iq-sub-card">
                                        <div className="media align-items-center">
                                           <img src="assets/frontend/images/notify/thumb-2.jpg" className="img-fluid mr-3"
                                              alt="streamit" />
                                           <div className="media-body">
                                              <h6 className="mb-0 ">The Last Breath</h6>
                                              <small className="font-size-12">15 minutes ago</small>
                                           </div>
                                        </div>
                                     </a>
                                     <a href="/#" className="iq-sub-card">
                                        <div className="media align-items-center">
                                           <img src="assets/frontend/images/notify/thumb-3.jpg" className="img-fluid mr-3"
                                              alt="streamit" />
                                           <div className="media-body">
                                              <h6 className="mb-0 ">The Hero Camp</h6>
                                              <small className="font-size-12">1 hour ago</small>
                                           </div>
                                        </div>
                                     </a>
                                  </div>
                               </div>
                            </div>
                         </li>
                         <li className={`nav-item nav-icon ${isActive ? "" : "iq-show"}`} onClick={handleToggle}>
                            <a href="/#" className="iq-user-dropdown search-toggle p-0 d-flex align-items-center"
                               data-toggle="search-toggle">
                            <img src="assets/frontend/images/user/user.jpg" className="img-fluid avatar-40 rounded-circle" alt="user"></img>
                            </a>
                            <div className="iq-sub-dropdown iq-user-dropdown">
                               <div className="iq-card shadow-none m-0">
                                  <div className="iq-card-body p-0 pl-3 pr-3">
                                     <a href="manageprofile.html" className="iq-sub-card setting-dropdown">
                                        <div className="media align-items-center">
                                           <div className="right-icon">
                                              <i className="ri-file-user-line text-primary"></i>
                                           </div>
                                           <div className="media-body ml-3">
                                              <h6 className="my-0 ">Manage Profile</h6>
                                           </div>
                                        </div>
                                     </a>
                                     <a href="settings.html" className="iq-sub-card setting-dropdown">
                                        <div className="media align-items-center">
                                           <div className="right-icon">
                                              <i className="ri-settings-4-line text-primary"></i>
                                           </div>
                                           <div className="media-body ml-3">
                                              <h6 className="my-0 ">Settings</h6>
                                           </div>
                                        </div>
                                     </a>
                                     <a href="pricingplan1.html" className="iq-sub-card setting-dropdown">
                                        <div className="media align-items-center">
                                           <div className="right-icon">
                                              <i className="ri-settings-4-line text-primary"></i>
                                           </div>
                                           <div className="media-body ml-3">
                                              <h6 className="my-0 ">Pricing Plan</h6>
                                           </div>
                                        </div>
                                     </a>
                                     <form method="POST" action="https://templates.iqonic.design/streamit/laravel/public/logout">
                                      
                                        <a href="/#" className="iq-sub-card setting-dropdown" >
                                        <div className="media align-items-center">
                                           <div className="right-icon">
                                              <i className="ri-logout-circle-line text-primary"></i>
                                           </div>
                                           <div className="media-body ml-3">
                                              <h6 className="my-0 ">Logout</h6>
                                           </div>
                                        </div>
                                     </a>
                                    </form>

                                     
                                  </div>
                               </div>
                            </div>
                         </li>
                      </ul>
                   </div>
                </nav>
                
             </div>
          </div>
       </div>
    </div>
 </header>
    );
}

export default Header
    