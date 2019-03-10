import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';
import Popular from './popular';
import Upcoming from './upcoming';
import TopRated from './topRated';
export default class Lists extends Component {
    state = {
        results: [],
        selectedTab:'1'
      };
     
      renderSelectedTab () {
        switch (this.state.selectedTab) {
          case '1':
            return (<Popular/>);
            break;
          case '2':
            return (<TopRated/>);
            break;
          case '3':
            return (<Upcoming/>);
            break;
          default:
        }
      }
   
      render() {
    
        return (
          <Container>
         <Segment >
            <Button vertical active={this.state.selectedTab==='1'} onPress={() => this.setState({selectedTab: '1'})}>
            <Text>Popular</Text>
            </Button>
            <Button vertical active={this.state.selectedTab==='2'} onPress={() => this.setState({selectedTab: '2'})}>
             <Text>Top Rated</Text>
            </Button>
            <Button vertical active={this.state.selectedTab==='3'} onPress={() => this.setState({selectedTab: '3'})}>
             <Text>Upcoming</Text>
            </Button>
            </Segment>
          
         
     
        <Content>
        {this.renderSelectedTab()}
        </Content>
     
        </Container>
        );
      }
    }