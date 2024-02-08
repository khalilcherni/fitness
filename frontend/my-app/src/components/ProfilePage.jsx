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
import './ProfilePage.css'
import { useState } from 'react';

export default function ProfilePage() {
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [location, setLocation] = useState('Fitness Street, Gym City, CA');
  const [imageSrc, setImageSrc] = useState('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp');

  // Functions to handle changes in user information
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }

  const handleImageChange = (event) => {
    setImageSrc(event.target.value);
  }
  return (
    <section className='o'>
      <MDBContainer className="py">

        <MDBRow >
          <MDBCol lg="4">
            <MDBCard id="a" className="mb-4" style={{ borderColor: 'rgb(150, 150, 150)' }}>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={imageSrc}
                  alt="fitness avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <hr />
                <p className="m">Fitness Enthusiast</p>
             
                <div className="d-flex justify-content-center mb-2">
                 
                </div>
                  <MDBCol sm="9">
                    <input className='n' type="text" value={imageSrc} onChange={handleImageChange} />
                    <MDBBtn 
        id="r"
      onClick={() => setImageSrc('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp')}
        size="sm"
><h6>Reset</h6>
</MDBBtn>

                  </MDBCol>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4" id="l" style={{ borderColor: 'rgb(150, 150, 150)' }}>
              <MDBCardBody className="p-0">
                <MDBListGroup flush="true" className="rounded-3">
                  <MDBListGroupItem className="pp">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText className="m" > Fitness Website</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="pp">
                    <MDBIcon fab icon="github fa-lg" />
                    <MDBCardText className="m">fitnessgithub</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="pp">
                    <MDBIcon fab icon="twitter fa-lg" />
                    <MDBCardText className="m">@fitnesslover</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="pp">
                    <MDBIcon fab icon="instagram fa-lg" />
                    <MDBCardText className="m">fitnesslover123</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="pp">
                    <MDBIcon fab icon="facebook fa-lg" />
                    <MDBCardText className="m">fitnesslover</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4" style={{ borderColor: 'rgb(150, 150, 150)' }}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText id='t' className="m">Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText  id='t' className="m">John Doe</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText  id='t' className="m">Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText  id='t' className="m">johndoe@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText  id='t' className="m">Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText  id='t' className="m">(123) 456-7890</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText  id='t' className="m">Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText  id='t' className="m">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText  id='t' className="m">Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText  id='t' className="m">Fitness Street, Gym City, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb" id="z" style={{ borderColor: 'rgb(150, 150, 150)' }}>
                  <MDBCardBody className='nn'>
                    <MDBCardText  className="m"><span className="m">Assignment</span> Project Status</MDBCardText>
                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Muscle Building</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Cardio Training</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Diet Plan</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Supplement Usage</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Progress Tracking</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb" id="z" style={{ borderColor: 'rgb(150, 150, 150)' }}>
                  <MDBCardBody>
                    <MDBCardText className="m"><span className="m">Assignment</span> Project Status</MDBCardText>
                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Strength Training</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Flexibility Exercises</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Endurance Workouts</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Recovery Techniques</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: '#f9ac54' }} />
                    </MDBProgress>

                    <MDBCardText className="m" style={{ fontSize: '.77rem' }}>Personal Training</MDBCardText>
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
