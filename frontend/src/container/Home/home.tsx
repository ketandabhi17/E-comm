import React from "react";
import Jumbotron from "react-bootstrap";
import Index from "../../components/layouts";

function Home() {
  return (
    <>
      <Index />
      {/* <div className="container">
        <h3>Admin Dashboard</h3>
      </div> */}
      <div className="container-fluid bg-white text-dark my-5" style={{background:'#fff'}}>
        <div className="container text-center">
          <h6 className="display-5 ">Welcome to Admin Dashboard</h6>
          {/* <hr /> */}
          {/* <p>Go to My Website</p>
          <a href="#" className="btn btn-primary">
            link
          </a>                                    */}

          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
