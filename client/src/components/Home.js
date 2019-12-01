import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h1 class="mb-5"> Welcome! </h1>
        </div>
        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div class="form-row">
              <div class="col-12 col-md-3">
                  <form>
                  <Link to='/safehaven' class="btn btn-block btn-lg btn-primary">Sensory Haven Near Me</Link>
                  </form>
              </div>
              <br />
              <div class="col-12 col-md-3">
                  <form>
                  <Link to='/profile' class="btn btn-block btn-lg btn-primary">My Accessibility Needs</Link>
                  </form>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)
/*
<li><Link to='/'>Home</Link></li><
  li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/map'>Map</Link></li>
        */
export default Home
