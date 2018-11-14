import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'reactstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'


class Assignee {
	constructor(name, role){
		this.name = name;
		this.role = role;
	}
}

class Assignment {
	constructor(name, assignee, startDate, noOfDays){
		this.name = name;
		this.assignee = assignee;
		this.startDate = startDate;
		this.noOfDays = noOfDays;
	}
}
class Plan extends React.Component {
	constructor(props){
		super(props);
		this.state={assignments : props.assignnmment};
	}
	
	renderAssignmentsRows(){
		var rows = [];
		var assignments = this.state.assignments;
		for(let assignment in assignments){
			rows.push(<Row><Col>{assignment.name}</Col></Row>);
		}
		return rows;
	}

	render(){
		return (<Container className="fluid"> {this.rederAssignmentRows()} </Container>);
	}
}

ReactDOM.render(() => {
	var assignments = [];
	assignments.push(new Assignment("do task 1", "parikshit", "14/11/2018",3));
	assignments.push(new Assignment("do task 2", "pooja", "14/11/2018",2));
	return (<Plan assignments = {assignments}/>);}, document.getElementById('root'));