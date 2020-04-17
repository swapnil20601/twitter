import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
} from "mdbreact";
import "./Homepage.css";
import logo from "../../images/home.gif";

const homePage = () => {
  return (
    <div id="apppage">
      {/* <img src={logo} alt="loading..."/> */}
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
            <MDBCol
                md="6"
                className="text-center text-md-left mt-xl-5 mb-5"
              >
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <h1 className="h1-responsive white-text font-weight-bold mt-sm-5">
                    Twitter Showcase App
                  </h1>
                  <hr className="hr-light" />
                  <p className="mb-4 white-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.
                  </p>
                </MDBAnimation>
              </MDBCol>

              {/* <MDBCol md="1" xl="5" className="mt-xl-5">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                    alt=""
                    className="img-fluid"
                  />
                </MDBAnimation>
              </MDBCol> */}
          </MDBContainer>
        </MDBMask>
      </MDBView>
    </div>
  );
};

export default homePage;
