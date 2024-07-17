import "./Home.css"
import myIcon from "./images/avataaars.svg"
function Home() {
    return <>
    <div className="home w-100 p-5 flex-column  text-center gy-3">
        <img className="home__avatar mb-5" src={myIcon} alt="" />
        <h1 className=" text-uppercase text-white fs-1 fw-bold">start framework</h1>
        <div className="shapes d-flex gap-3 justify-content-center align-items-center ">
            <div className="line bg-white"></div>
        <div className=" fa-solid  fa-star my-3 text-white "></div>
        <div className="line bg-white"></div>

       
        </div>
        <p className="fs-5 text-white">Graphic Artist - Web Designer - Illustrator</p>
       
    </div>
    
    </>;
}

export default Home;