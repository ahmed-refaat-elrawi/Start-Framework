import "./About.css"
function About() {
    return <>
    <div className="about flex-column align-content-center text-center ">
    <h1 className=" text-uppercase text-white fs-1 fw-bolder">ABOUT COMPONENT</h1>
    <div className="shapes d-flex gap-3 justify-content-center align-items-center ">
            <div className="line bg-white"></div>
        <div className=" fa-solid  fa-star my-3 text-white "></div>
        <div className="line bg-white"></div>
        </div>
        <div className="about__content w-75 row  m-auto px-5 text-start">
            <p className="text-white col-lg-6 fs-5">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className="text-white col-lg-6 fs-5">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            
        </div>
    </div>
   
    </>;
}

export default About;