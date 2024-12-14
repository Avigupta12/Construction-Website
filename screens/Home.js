import React,{useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";


export default function Home() {
  const [search,setSearch] = useState('');
    const [foodCat,setFoodCat] = useState([]);
    const [foodItem,setFoodItem] = useState([]);

    const loadData = async () => {
      try {
        let response = await fetch("http://localhost:8000/api/foodData", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        // Parse the response as JSON
        response = await response.json();
    
        // Assuming response[0] and response[1] contain data
        setFoodItem(response[0]);
        setFoodCat(response[1]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    useEffect(() => {
      loadData();
    }, []);
      

  return (
    <div>
      <div> <Navbar /></div>
     <div> 
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner id=carousal" id="carousal">
    <div className='carousel-caption' style={{zIndex:"10"}}>
    <div class="d-flex justify-content-center">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      {/* <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
    </div>
    </div>
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1482731215275-a1f151646268?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{filter:"brightness(70%)"}} alt="..."/>
    </div>
    <div className="carousel-item"> 
      <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{filter:"brightness(70%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://wfmmedia.com/wp-content/uploads/2023/02/Facade-Lighting-project-The-Illuminati-Gurugram-India-by-Cityspace82-Architects.webp" className="d-block w-100" style={{filter:"brightness(70%)"}} alt="..."/>
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
</div></div>
      <div className="container">
      {
        foodCat.length !== 0
        ? foodCat.map((data)=>{
            return(
           

              <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
              <hr/>
                {foodItem.length !== 0  ?
                foodItem.filter((item)=> (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                .map(filterItems=>{
                  return(
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                      <Card 
                      foodItem={filterItems}
                      options={filterItems.options[0]}
                      // foodName = {filterItems.name}
                      // options={filterItems.options[0]}
                      // imgSrc={filterItems.img}
                      
                      ></Card>
                      </div>
                  )
                }): null

                }
              </div>
            )
        })
        :""
      }
       
        </div>

      <div><Footer /></div>
    </div>
  );
}
