import React from 'react'
import { } from 'bootstrap/dist/css/bootstrap.min.css'
import { } from 'bootstrap/dist/js/bootstrap.js'
import Home from '../Home/Home'

function Header() {
  return (
    <div>
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img class="bi me-2 rounded-circle" width="60" height="60" src="./src/photos/11_14_2023 4_52_13 PM.png" alt="logo" />
            <span class="fs-4">Ranaweera Aquarium</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
            <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
            <li class="nav-item"><a href="./AboutUs" class="nav-link">About</a></li>

            <div class="dropdown open">
              <button
                class="btn btn-secondary dropdown-toggle bg-body-secondary  "
                type="button"
                id="triggerId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
                  <path fill="#c2cde7" d="M59,20v36c0,1.66-1.34,3-3,3H33L21,17h35C57.66,17,59,18.34,59,20z"></path><path fill="#85cbf8" d="M43,47H8c-1.66,0-3-1.34-3-3V8c0-1.66,1.34-3,3-3h21.49c0.89,0,1.68,0.59,1.92,1.45L32.42,10L43,47z"></path><path fill="#acb7d0" d="M42 47L29.735 47.029 33 58 43 47z"></path><path fill="#acb7d0" d="M59,57.63L59,57.63c0,0.757-0.614,1.37-1.37,1.37H35v-5h20.37C57.375,54,59,55.625,59,57.63z"></path><path fill="#9fddff" d="M32.42,10H8.827C6.713,10,5,8.287,5,6.173v0C5,5.525,5.525,5,6.173,5H29.49 c0.89,0,1.68,0.59,1.92,1.45L32.42,10z"></path><path fill="#8d6c9f" d="M56,16H35.18l-2.8-9.82C32.01,4.89,30.82,4,29.49,4H8C5.79,4,4,5.79,4,8v36c0,2.21,1.79,4,4,4 h20.82l3.22,11.27c0.01,0.034,0.031,0.061,0.044,0.094c0.02,0.05,0.039,0.097,0.067,0.143c0.043,0.073,0.097,0.135,0.156,0.194 c0.021,0.021,0.031,0.048,0.053,0.067c0.006,0.005,0.014,0.007,0.021,0.012c0.066,0.053,0.142,0.091,0.22,0.126 c0.024,0.011,0.046,0.029,0.071,0.038c0.099,0.035,0.205,0.053,0.315,0.054C32.991,59.998,32.995,60,33,60l0,0l0,0h23 c2.21,0,4-1.79,4-4V20C60,17.79,58.21,16,56,16z M28.25,46H8c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h21.49c0.45,0,0.84,0.3,0.96,0.73 L33.1,16l0.57,2l8,28H30.32H28.25z M40.865,48l-7.426,8.911L30.9,48H40.865z M58,56c0,1.1-0.9,2-2,2H35.135L38,54.562V55 c0,0.552,0.448,1,1,1s1-0.448,1-1v-2c0-0.223-0.087-0.419-0.211-0.585l3.979-4.775c0.006-0.008,0.007-0.017,0.013-0.025 c0.005-0.006,0.014-0.009,0.018-0.015c0.024-0.032,0.027-0.072,0.047-0.106c0.049-0.084,0.093-0.168,0.116-0.26 c0.013-0.053,0.012-0.105,0.016-0.159c0.007-0.094,0.004-0.183-0.015-0.275c-0.005-0.023,0.003-0.047-0.004-0.07l-1.27-4.449 c1.026-0.593,1.973-1.302,2.824-2.093c2.15,2.201,4.957,3.782,7.474,3.782c0.552,0,1-0.448,1-1s-0.448-1-1-1 c-1.995,0-4.321-1.368-6.11-3.22c1.938-2.323,3.11-5.105,3.11-7.78v-1h3c0.552,0,1-0.448,1-1s-0.448-1-1-1h-7v-2 c0-0.552-0.448-1-1-1s-1,0.448-1,1v2h-3c-0.552,0-1,0.448-1,1s0.448,1,1,1h7v1c0,2.233-0.984,4.394-2.418,6.195 c-0.961-1.374-1.582-2.858-1.582-4.195c0-0.552-0.448-1-1-1s-1,0.448-1,1c0,1.865,0.868,3.891,2.212,5.69 c-0.657,0.62-1.362,1.163-2.081,1.622L35.76,18H56c1.1,0,2,0.9,2,2V56z"></path><path fill="#fff" d="M22.335,18.65c-0.137-0.406-0.518-0.68-0.947-0.68s-0.81,0.274-0.947,0.68l-5.4,16 c-0.177,0.523,0.104,1.091,0.627,1.267c0.522,0.178,1.091-0.105,1.267-0.627l1.806-5.35c0.05,0.008,0.095,0.03,0.147,0.03h5 c0.052,0,0.097-0.022,0.147-0.03l1.806,5.35c0.141,0.417,0.53,0.681,0.947,0.681c0.106,0,0.214-0.017,0.32-0.053 c0.523-0.176,0.804-0.744,0.627-1.267L22.335,18.65z M19.406,27.97l1.982-5.873l1.982,5.873H19.406z"></path><path fill="#8d6c9f" d="M9 8C8.448 8 8 8.448 8 9v2c0 .552.448 1 1 1s1-.448 1-1V9C10 8.448 9.552 8 9 8zM15 9c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1V9zM19 12c.552 0 1-.448 1-1V9c0-.552-.448-1-1-1s-1 .448-1 1v2C18 11.552 18.448 12 19 12zM24 12c.552 0 1-.448 1-1V9c0-.552-.448-1-1-1s-1 .448-1 1v2C23 11.552 23.448 12 24 12zM29 8c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1V9C30 8.448 29.552 8 29 8zM44 52c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1v-2C45 52.448 44.552 52 44 52zM49 52c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1v-2C50 52.448 49.552 52 49 52zM54 52c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1v-2C55 52.448 54.552 52 54 52z"></path>
                </svg>
              </button>
              <div class="dropdown-menu" aria-labelledby="triggerId">
                <button class="dropdown-item" href="#">English</button>
                <button class="dropdown-item" href="#">Sinhala</button>
              </div>
            </div>

          </ul>
        </header>
      </div>




      <Home />
    </div>
  )
}

export default Header