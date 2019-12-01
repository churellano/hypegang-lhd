import React from 'react'

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
                  <button formaction="http://www.stackoverflow.com" type="submit" class="btn btn-block btn-lg btn-primary">Sensory Haven Near Me</button>
                  </form>
              </div>
              <div class="col-12 col-md-3">
                  <form>
                  <button formaction="http://www.stackoverflow.com" type="submit" class="btn btn-block btn-lg btn-primary">My Accessibility Needs</button>
                  </form>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default Home
