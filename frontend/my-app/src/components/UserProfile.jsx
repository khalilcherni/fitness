import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import './UserProfile.css'

export default function ProfilePage() {
  return (
    <section >
      <MDBContainer className="py-5">
   
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="m">Full Stack Developer</p>
                <p className="m">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="pp">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText className="m">https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="pp">
                    <MDBIcon fab icon="github fa-lg"  />
                    <MDBCardText className="m">mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="pp">
                    <MDBIcon fab icon="twitter fa-lg"  />
                    <MDBCardText className="m">@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="pp">
                    <MDBIcon fab icon="instagram fa-lg" />
                    <MDBCardText className="m">mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="pp">
                    <MDBIcon fab icon="facebook fa-lg" />
                    <MDBCardText className="m">mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="m">Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="m">Johnatan Smith</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="m">Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="m">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="m">Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="m">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="m">Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="m">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="m">Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="m">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="m"><span className="m">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />


                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="m"><span className="m">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}