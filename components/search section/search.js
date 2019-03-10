import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';
import Movies from './movies';
import People from './people';
import TV from './tv';
export default class Search extends Component {
    state = {
        results: [],
        selectedTab:'1'
      };
     
      renderSelectedTab () {
        switch (this.state.selectedTab) {
          case '1':
            return (<Movies/>);
            break;
          case '2':
            return (<People/>);
            break;
          case '3':
            return (<TV/>);
            break;
          default:
        }
      }
   
      render() {
    
        return (
          <Container>
         <Segment >
            <Button vertical active={this.state.selectedTab==='1'} onPress={() => this.setState({selectedTab: '1'})}>
            <Text>Movies</Text>
            </Button>
            <Button vertical active={this.state.selectedTab==='2'} onPress={() => this.setState({selectedTab: '2'})}>
             <Text>People</Text>
            </Button>
            <Button vertical active={this.state.selectedTab==='3'} onPress={() => this.setState({selectedTab: '3'})}>
             <Text>TV show</Text>
            </Button>
            </Segment>
          
         
     
        <Content>
        {this.renderSelectedTab()}
        </Content>
     
        </Container>
        );
      }
    }