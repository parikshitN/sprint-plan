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
		
		//assignments.push(new Assignment("do task 1", "parikshit", "14/11/2018",3));
		//assignments.push(new Assignment("do task 2", "pooja", "14/11/2018",2));	
		//this.state={assignments : [new Assignment("do task 1", "parikshit", "14/11/2018",3),
		//new Assignment("do task 2", "pooja", "14/11/2018",2)]};
		this.state = {assignments : []};
	}
	
	componentDidMount(){
		const assignments = [new Assignment("do task 1", "parikshit", "14/11/2018",3),new Assignment("do task 2", "pooja", "14/11/2018",2)];
		this.setState({assignments});
	}
	
	renderAssignmentRows(){
		return this.state.assignments.map(assignment => <Row><Col>{assignment.name}</Col></Row>);
	}

	render(){
		return (<Container className="fluid"> {this.renderAssignmentRows()} </Container>);
	}
}

ReactDOM.render(<Plan />, document.getElementById('root'));