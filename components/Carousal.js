import React from 'react'

export default function() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner id=carousal" id="carousal">
    <div className='carousel-caption' style={{zIndex:"10"}}>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item"> 
      <img src="https://media.istockphoto.com/id/1287186696/cs/fotografie/objedn%C3%A1vka-aplikace-pro-doru%C4%8Den%C3%AD-j%C3%ADdla-s-telefonem-online-mobiln%C3%AD-slu%C5%BEba-pro-odn%C3%A9st.jpg?s=2048x2048&w=is&k=20&c=L0jUUwIZiK6aicVK3bLk8MmygYhSFDmtrQUBs3Ep9N8=" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/2106274316/cs/fotografie/male-hand-holding-phone-with-food-delivery-app-in-cafe.jpg?s=2048x2048&w=is&k=20&c=JNN-rDnOT5oHXDeMEInEyLKDFDHJlVpNy5iJDnGpvgM=" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
