import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './SideNav.css';
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import Record from './Record'
import Records from './Records'
import axios from 'axios';

// var serverURL = "http://localhost:8080/LectureServlet/viewpage"
var serverURL = "https://servlet-1.herokuapp.com/";

class ViewPage extends Component {

    /*
     the state of the ViewPage component consists of:
        expanded: whether or not the side bar is expanded
        key: current selected region
        records: array of records with values obtained from database
    */

    constructor(props) {
        super(props);
        this.state={
            expanded: false,
            key: 'headnneck',
            records:[]};
        this.handlePost = this.handlePost.bind(this);  
    }

    //Make a post request as soon as page opens
    
    componentDidMount(){
        this.handlePost();
    }

    //Make a post request to the server
    async handlePost(){
        //Reset the records state to blank
        this.setState({records:[]});
        axios.post(serverURL,this.state.key,'Access-Control-Allow-Origin','*').then(response => {
            
            //Define empty arrays for lines, record, and list
            var lines = []
            var record = []
            var list = []
            
            /*
            Validate whether the response data is an object of type String or Object
            When only one record is returned from the database, it is sent from the server as an Object
            When more than one record is returned form the database, it is sent from the server as a String
                with each record delimited by \n
            */
            if(Object.prototype.toString.call(response.data)=="[object String]"){
                //Parse response data using split function
                //Each member of the array lines is an individual record
                lines = response.data.split("\n");
                for(var i=0;i<lines.length-1;i++){
                    //Convert each member in lines from String to JSON
                    record = JSON.parse(lines[i]);
                    //Push JSON object to array list
                    list.push(record);
                } 
            } else if(Object.prototype.toString.call(response.data)=="[object Object]"){
                //Response data is already a JSON object
                //Push JSON object to array list
                list.push(response.data);
            }

            //Set the records state to the list of records
            for(var i=0;i<list.length;i++){
                //Create a new record with the relevant information for each member of the array list
                const newRecord = {id: list[i].id, date: list[i].date, erythemascore: list[i].erythemascore, edemascore: list[i].edemascore, exclorationscore: list[i].exclorationscore, lichenificationscore: list[i].lichenificationscore, areascore:list[i].areascore, totalscore:list[i].totalscore, comments:list[i].comments};
                //Append new record to the current records in records state
                const records = [...this.state.records, newRecord];
                //Set records state to include the new record
                this.setState({records});
            }

            }).catch(error => {
                console.log(error.response)
            })
    }

    // function that sets side bar to expanded if expand button clicked
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
                        <button type="button" onClick = {() => {this.setState({key:'headnneck'},()=>{this.handlePost()}); }} className="btn btn-primary">head/neck</button>
                        <button type="button" onClick = {() => {this.setState({key:'trunk'},()=>{this.handlePost()}); }} className="btn btn-primary">trunk</button>
                        <button type="button" onClick = {() => {this.setState({key:'lowerlimb'},()=>{this.handlePost()}); }} className="btn btn-primary">l. extremities</button>
                        <button type="button" onClick = {() => {this.setState({key:'upperlimb'},()=>{this.handlePost()}); }}className="btn btn-primary">u. extremities</button>
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
