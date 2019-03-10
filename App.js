import React, { Component } from 'react';
import { Container, Header, Title, Subtitle, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Lists from './components/lists section/Lists';
import Search from './components/search section/search';
import Nowplaying from './components/nowPlaying';
export default class App extends Component {
  state = {
    selectedTab:'1'
  }
  renderSelectedTab () {
    switch (this.state.selectedTab) {
      case '1':
        return (<Nowplaying/>);
        break;
      case '2':
        return (<Search/>);
        break;
      case '3':
        return (<Lists/>);
        break;
      default:
    }
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#1a85dd" }}> 
         
          <Body>
            <Title style={{ fontWeight: "900", color: "white" ,fontSize: 26}}> MovieMag</Title>
            <Subtitle style={{color: "white" ,fontSize: 10}}>coz entertainment is must</Subtitle>
          </Body>
         
        </Header>
        <Content>
        {this.renderSelectedTab()}

        </Content>
        <Footer>
          <FooterTab >
            <Button vertical active={this.state.selectedTab==='1'} onPress={() => this.setState({selectedTab: '1'})}>
              <Icon name="apps" />
              <Text >Now Playing</Text>
            </Button>
            <Button vertical active={this.state.selectedTab==='2'} onPress={() => this.setState({selectedTab: '2'})}>
              <Icon name="search" />
              <Text>Search</Text>
            </Button>
            <Button vertical active={this.state.selectedTab==='3'} onPress={() => this.setState({selectedTab: '3'})}>
              <Icon active name="list" />
              <Text>List</Text>
            </Button>
           
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}