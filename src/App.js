import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Users from "./Components/Users";
import UserForm from "./Components/Form";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        {
          name: "Philo",
          gen: 60,
          height: "2m",
        },
        {
          name: "Sam Generals",
          gen: 23,
        },
        {
          name: "Miss Bentil",
          gen: 23,
        },
        {
          name: "Rabbi",
          gen: 23,
        },
        {
          name: "Joshua",
          gen: 23,
        },
        {
          name: "Hussein",
          gen: 23,
        },
      ],
    };
  }

  addStudent = (newStudent) => {
    this.setState({
      students: [...this.state.students, newStudent],
    });
  };
  //functional Component
  // const addStudent = (newStudent) => {
  //  setStudents([...students,newStudent])
  // };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <UserForm addStudent={this.addStudent} />
            </Col>
            <Col>
              <Users students={this.state.students} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
