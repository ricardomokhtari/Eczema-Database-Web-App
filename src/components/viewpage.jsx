import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './SideNav.css';
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import Record from './Record'
import Records from './Records'
import axios from 'axios';

var serverURL = "http://localhost:8080/LectureServlet/"

class ViewPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            expanded: false,
            key: 'head',
            records:[]};
        this.handleGet = this.handleGet.bind(this);  
      }
    
    componentDidMount(){
        this.handleGet();
    }

    async handleGet(){
        this.setState({records:[]});
        axios.get(serverURL).then(({data}) => {
          const lines = data.split("\n");
    
          var list = []

          for(var i=0;i<lines.length-1;i++){
            var patient = JSON.parse(lines[i]);
            list.push(patient);
          }

          for(var i=0;i<list.length;i++){
            const newRecord = {index: i, patientid: list[i].id, DOB: list[i].DOB, latestSeverityScore: list[i].latestSeverityScore};
            const records = [...this.state.records, newRecord];
            this.setState({records});
          }

          console.log(this.state.key);

        }).catch(error => {
              console.log(error.response)
        })
    }

    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    render(){
        const {expanded} = this.state;
        return (
            <React.Fragment>
                <div
                    style={{
                        marginLeft: expanded ? 240 : 64,
                        padding: '15px 20px 0 20px'
                    }}>
                    <div>
                        <h1>
                            regions
                        </h1>
                    </div>

                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" onClick = {() => {this.setState({key:'head'}); this.handleGet()}} className="btn btn-primary">head/neck</button>
                        <button type="button" onClick = {() => {this.setState({key:'trunk'}); this.handleGet()}}className="btn btn-primary">trunk</button>
                        <button type="button" onClick = {() => {this.setState({key:'lowerlimb'}); this.handleGet()}} className="btn btn-primary">l. extremities</button>
                        <button type="button" onClick = {() => {this.setState({key:'upperlimb'}); this.handleGet()}}className="btn btn-primary">u. extremities</button>
                    </div>

                    <Records records={this.state.records}/>
    
                    <SideNav onToggle = {this.onToggle}>
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="home">
                            <NavItem eventKey="home">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Records
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="charts">
                                <NavIcon>
                                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Upload
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </div>
            </React.Fragment>
        );
    }
}

export default ViewPage;
