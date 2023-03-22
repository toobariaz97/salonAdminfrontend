import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const { user } = useSelector((state) => state?.auth)


  return (
    <>
      <nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border">
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mobile-menu d-md-none mr-auto">
                <a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                  <i className="ft-menu font-large-1" /></a>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" href="/">
                  <img className="brand-logo img-fluid" alt="admin logo" src="images/logo.png" /> </Link> </li>
              <li className="nav-item d-md-none">
                <a className="nav-link open-navbar-container" data-bs-toggle="collapse" data-bs-target="#navbar-mobile">
                  <i className="fa fa-ellipsis-v" /></a>
              </li>
            </ul>
          </div>
          <div className="navbar-container content">
            <div className="collapse navbar-collapse" id="navbar-mobile">
              <ul className="nav navbar-nav me-auto float-start">
              </ul>
              <ul className="nav navbar-nav float-end nav-right align-items-center">
                <li className="dropdown dropdown-notification nav-item">
                  <a className="nav-link nav-link-label" href="#" data-bs-toggle="dropdown" aria-expanded="true">
                    <span className="position-relative">
                      <img src="images/header-bell.png" alt="" className="header-bell" />
                      <span className="noti-count-span">5</span>
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right notificationDiv">
                    {/* <li class="dropdown-menu-header">
									<h6 class="dropdown-header m-0">Notifications</h6>
								</li> */}
                    <li className="scrollable-container media-list ps-container ps-theme-dark">
                      <a href="../profile/notifications.php">
                        <div className="media d-flex">
                          <div className="media-left flex-shrink-0 align-self-top"><img src="images/drp-bell.png" alt="" /></div>
                          <div className="media-body flex-grow-1">
                            <h6 className="media-heading">Lorem ipsum dolor sit amet, consectetur elit. Aenean euismod bibendum laoreet.</h6>
                            <small>
                              <time className="media-meta text-danger" dateTime="2015-06-11T18:29:20+08:00">mm/dd/yyyy <span>|</span> 03 min ago</time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="../profile/notifications.php">
                        <div className="media d-flex">
                          <div className="media-left flex-shrink-0 align-self-top"><img src=".images/drp-bell.png" alt="" /></div>
                          <div className="media-body flex-grow-1">
                            <h6 className="media-heading">Lorem ipsum dolor sit amet, consectetur elit. Aenean euismod bibendum laoreet.</h6>
                            <small>
                              <time className="media-meta text-danger" dateTime="2015-06-11T18:29:20+08:00">mm/dd/yyyy <span>|</span> 03 min ago</time>
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-menu-footer">
                      <Link className="dropdown-item text-danger text-end view-alll" to="/notifications"> <u>View All</u> </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-user nav-item">
                  <div className="d-flex">
                    <a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-bs-toggle="dropdown">
                      <span className="avatar avatar-online"> <img src={user && (user?.image_url?.includes('undefined') ? "images/avatar.png" : user?.image_url)}
                        alt="avatar" /> </span>
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0">{user && (user ? user?.name : "guest")}</p>
                        </div>
                      </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right profile-menu">
                      <Link className="dropdown-item" to="/profile"><img src="images/header-user.png" className="me-2" alt='avatar' />My Profile</Link>
                      <a className="dropdown-item" href="../auth/index.php" data-bs-toggle="modal" data-bs-target="#logoutModal">
                        <img src="images/header-logout.png" className="me-2" alt='logout' />Logout</a>
                    </div>
                  </div>
                </li>
                <li className="nav-item mobile-menu d-none d-md-block mr-auto">
                  <a className="nav-link nav-menu-main menu-toggle is-active" href="#">
                    <i className="ft-menu font-large-1" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}
