import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './SideNav.css';
import './UploadPage.css';

class UploadPage extends Component {
    state = {
        expanded: false
    };

    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };
    
    render() { 
        const {expanded} = this.state;
        return (
            <React.Fragment>
                <div 
                 style={{
                    marginLeft: expanded ? 240 : 64,
                    padding: '15px 20px 0 20px'
                }}>
                    <div>
                        <h1>Upload</h1>
                    </div>
                    <div className = "Inline">
                        <h5>Date Taken</h5>
                        <input type="text" placeholder = "eg. 24/11/2019"/>
                    </div>
                    <div className = "Inline">
                        <h5>Region</h5>
                        <input type="text" placeholder = "eg. Head"/>
                    </div>
                    <div className = "Inline">
                        <h5>Score:</h5>
                    </div>
                    <div>
                        <button className = "btn btn-info m-2">Upload</button>
                    </div>
                </div>

                <div>
                    <SideNav onToggle = {this.onToggle}>
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="charts">
                            <NavItem eventKey="charts">
                                <NavIcon>
                                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Upload
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="home">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Records
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </div>
                
        </React.Fragment>
        );
    }
}
 
export default UploadPage;