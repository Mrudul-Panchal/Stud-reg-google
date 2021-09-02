import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Formik }   from 'formik';
import { Container , Row , Col ,Input  } from "reactstrap";

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onChangeStudentPhoto = this.onChangeStudentPhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      rollno: '',
      photo:''
    }
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentRollno(e) {
    this.setState({ rollno: e.target.value })
  }
  onChangeStudentPhoto(e) {
    this.setState({ photo: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno,
      photo: this.state.photo
    };
    axios.post('http://localhost:9000/students/create-student', studentObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', email: '', rollno: '',photo:'' })
  }

  render() {
    return (<>
    <div className="form-wrapper">
    <Form onSubmit={this.onSubmit}>
   
     
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name}
           onChange={this.onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} 
          onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} 
          onChange={this.onChangeStudentRollno} />
        </Form.Group>
          <Container>
            <Row>
              {/* <Col>
              <Formik 
              initialValues={{photo:""}}
              onSubmit={(values)=>{
              let data= new FormData();

              data.append("photo", values.photo);
              return fetch(baseurl,{method:'post',
              headers= new Headers({Accept:"application/json"}),body:data})
              .then(response => response.json()).then(data=>console.log(data))
              .catch(error=>console.log(error))
              }} >
                {(formprops)=>(
                  <form>

                 <Input type="file" 
                 name="photo" 
                 onChange={(event)=>
                 formprops.setFieldValue("photo",event.target.files[0])}/>
                  </form>
                )}
                </Formik>         
                </Col> */}
            </Row>
          </Container>
        <Button variant="danger" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>
    </>
    );
  }
}