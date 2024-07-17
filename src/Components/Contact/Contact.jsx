import "./Contact.css"
function Contact() {
    return <>
    <div className="contact p-5 ">
    <h1 className=" text-uppercase text-center fs-1 fw-bolder">contact section</h1>
    <div className="shapes d-flex gap-3 justify-content-center align-items-center mb-5 ">
            <div className="line  bg-primary-color"></div>
        <div className=" fa-solid  fa-star my-3 primary-color "></div>
        <div className="line bg-primary-color"></div>
        </div>
        <form className="row w-50 m-auto g-3">
 
  <div className="col-12 mb-4">
    <label htmlFor="inputAddress" className="form-label">Username:</label>
    <input type="text" className="form-control " id="inputAddress" placeholder=" Username"/>
  </div>
  <div className="col-12 mb-4">
    <label htmlFor="inputAddress" className="form-label">Age:</label>
    <input type="text" className="form-control " id="inputAddress" placeholder="Age"/>
  </div>
  <div className="col-12 mb-4">
    <label htmlFor="inputAddress" className="form-label">Email:</label>
    <input type="text" className="form-control " id="inputAddress" placeholder="Email"/>
  </div>
  <div className="col-12 mb-4">
    <label htmlFor="inputAddress" className="form-label">Password:</label>
    <input type="text" className="form-control " id="inputAddress" placeholder="Password"/>
  </div>

  <div className="col-12">
    <button type="submit" className="btn text-white">Send Message</button>
  </div>
</form>

    </div>
    
    </>; 
}

export default Contact;