import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './SideNav.css';

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
                    <p>Hello World</p>



                    
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
                </div>
                
        </React.Fragment>
        );
    }
}
 
export default UploadPage;