import React from 'react'

import { } from 'bootstrap/dist/css/bootstrap.min.css'
import { } from 'bootstrap/dist/js/bootstrap.js'

import './Home.css'

import Footer from '../Footer/Footer'

function Home() {
    return (
        <div>


            <div id="myCarousel" class="carousel slide mb-6 " data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="bd-placeholder-img" width="100%" height="100%" src="public/photos/ranaweera AQUARIUM 01.png" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        <div class="container">
                            <div class="carousel-caption text-end">
                                <h1 className="Header01">Welcome to our website! hello</h1>
                                <p class="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Sign up</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="bd-placeholder-img" width="100%" height="100%" src="public/photos/ranaweera AQUARIUM 02.png" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        <div class="container">
                            <div class="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="bd-placeholder-img" width="100%" height="100%" src='public\photos\ranaweera AQUARIUM 03.png' aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/><rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        <div class="container">
                            <div class="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Our gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <br /><br /><br />

            <div class="container marketing  ">
                <br /><br />

                <div class="row">
                    <div class="col-lg-4">
                        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="public/photos/logo.png" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" /><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        <h2 class="fw-normal">Boyu</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <p><a class="btn btn-secondary" href="http://www.boyuaquarium.com/En_Mo_index_gci_8.html">View details &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="public/photos/Skretting full colour logo.png" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" /><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        <h2 class="fw-normal">Skretting</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        <p><a class="btn btn-secondary" href="https://www.skretting.com/">View details &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="public/photos/images.jpeg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" /><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        <h2 class="fw-normal">Kintons</h2>
                        <p>And lastly this, the third column of representative placeholder content.</p>
                        <p><a class="btn btn-secondary" href="https://www.yfaquarium.com/store/Kintons?limit=100">View details &raquo;</a></p>
                    </div>
                </div>
                {/* class="bd-placeholder-img rounded-circle" */}
                <br /><br />

                <hr class="featurette-divider" />

                <br /><br />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It'll blow your mind.</span></h2>
                        <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div class="col-md-5">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                    </div>
                </div>

                <br /><br />

                <hr class="featurette-divider" />

                <br /><br />

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it's that good. <span class="text-body-secondary">See for yourself.</span></h2>
                        <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                    </div>
                </div>

                <br /><br />

                <hr class="featurette-divider" />

                <br /><br />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">And lastly, this one. <span class="text-body-secondary">Checkmate.</span></h2>
                        <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                    </div>
                    <div class="col-md-5">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                    </div>
                </div>

                <br /><br />

                <hr class="featurette-divider" />

                <br /><br />

                {/* <footer class="container">
  <p class="float-end"><a href="#">Back to top</a></p>
  <p>&copy; 2017–2024 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
</footer> */}
            </div>



            <Footer />
        </div>
    )
}

export default Home
