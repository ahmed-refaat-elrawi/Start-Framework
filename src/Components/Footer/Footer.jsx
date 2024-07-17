import "./Footer.css"
function Footer() {
    return <>
    <footer className="  flex-column  alig justify-content-end   bottom-0 start-0 ">
        <div className="information  text-center text-white  justify-content-evenly p-5 row">
            <div className="col-md-4 py-5">
                <h3 className=" fs-2  fw-medium">LOCATION</h3>
                <p className="fs-6" >2215 John Daniel Drive</p>
                <p className="fs-6">Clark, MO 65243</p>
            </div>
            <div className="col-md-4 py-5">
                <h3 className=" fs-2  fw-medium">AROUND THE WEB</h3>
                <div className="socials d-flex justify-content-center gap-3">
                    
                    <i className="social__icon fs-5 fa-brands fa-facebook p-3 border-white rounded-circle   border "></i>
                    <i className="social__icon fs-5 fa-brands fa-twitter p-3 border-white rounded-circle   border "></i>
                    <i className="social__icon fs-5 fa-brands fa-linkedin-in p-3 border-white rounded-circle   border "></i>
                    <i className="social__icon fs-5 fa-solid fa-globe p-3 border-white rounded-circle   border "></i>
                
                    
                </div>
            </div>
            <div className="col-md-4 py-5">
                <h3 className=" fs-2  fw-medium">ABOUT FREELANCER                </h3>
                <p className="fs-6" >Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
                
            </div>
          
         
           
            
        </div>
     <div className="footer w-100 p-4  fs-5   text-center">Copyright © Your Website 2021</div>   
        </footer>
    </> ;
}

export default Footer;