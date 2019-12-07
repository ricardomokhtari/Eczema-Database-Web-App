import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './SideNav.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Record from './Record'
import Records from './Records'

class ViewPage extends Component {
    state = {
        expanded: false,
        key: 'head',
        records: [
            {index: null},
            {index: null}
        ]
    };

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
                    <Tabs activeKey={this.state.key} onSelect={k=>this.setState({key:k})}>
                      <Tab eventKey="head" title="head/neck">
                        <Records records={this.state.records}/>
                      </Tab>
                      <Tab eventKey="trunk" title="trunk">
                      </Tab>
                      <Tab eventKey="lextremities" title="l. extremities">
                      </Tab>
                      <Tab eventKey="uextremities" title="u. extremities">
                      </Tab>
                    </Tabs>
    
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
