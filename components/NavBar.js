import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';


const NavBar = () => {
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return " active"
    } else {
      return "";
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">Scale Data Verse</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/cart" legacyBehavior>
                <a className={"nav-link" + isActive("/cart")}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  Cart </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/signin" legacyBehavior>
                <a className={"nav-link" + isActive("/signin")}>
                  <i className="fa-solid fa-user"></i>
                  Sign in
                </a>
              </Link>
            </li>

            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User name
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Log out</a></li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default NavBar;