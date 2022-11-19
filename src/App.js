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
          id: "kjdh89t493h3059knerp;",
        },
        {
          name: "Sam Generals",
          gen: 23,
          id: "jkdbfibue5984y9-30",
        },
        {
          name: "Miss Bentil",
          gen: 23,
          id: "jhsdbiug438y43sn",
        },
        {
          name: "Rabbi",
          gen: 23,
          id: "8923y98wdihsp-sks",
        },
        {
          name: "Joshua",
          gen: 23,
          id: "lkdhfiher985009uj43m",
        },
        {
          name: "Hussein",
          gen: 23,
          id: "klndkdsoireorepwe03",
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

  editStudents = (id, editData) => {
    this.setState({
      students: this.state.students.map((item) => {
        // item.id==id? editData: item
        if (item.id == id) {
          return editData;
        } else {
          return item;
        }
      }),
    });
  };

  deleteStudent = (id) => {
    const filtered = this.state.students.filter((item) => {
      if (item.id !== id) return item;
    });

    this.setState({
      students: filtered,
    });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <UserForm addStudent={this.addStudent} />
            </Col>
            <Col>
              <Users
                students={this.state.students}
                updateData={this.editStudents}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
