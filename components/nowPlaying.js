import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image} from 'react-native'
import axios from 'axios';


const { height } = Dimensions.get('window');

export default class Nowplaying extends Component {
  state={
    results:[],
    HeightScreen: 0,
};
onContentSizeChange = (contentWidth, contentHeight) => {
  this.setState({ HeightScreen: contentHeight });
};

componentDidMount = async() => {
  let random = 1 + Math.random()*10;
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=8367b1854dccedcfc9001204de735470&language=en-US&page=${random}`

  axios
          .get(url)
          .then(data => {
              this.setState({
                  results: data.data.results
              })
          })
}
  
render() {
const scrollEnabled = this.state.HeightScreen > height;
  return (
<ScrollView
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
                style={{padding: 12, maxWidth: '100%'}} >
                <View style={styles.container}>
                    {this.state.results.slice(0,1).map((result, i) => {
                        return (
                            <View key={i} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

              <Text style={styles.titleText}><Text style={{fontWeight: '500'}}>Title:</Text> {result.title} </Text>
                             <Image source={{uri: `https://image.tmdb.org/t/p/w500/${result.poster_path}`}}  resizeMode="cover" style={{
                              alignSelf: 'center',
                              height: 250,
                              width: 250,
                              borderWidth: 2,
                              borderRadius: 50,
                              marginTop: 20
    
  }}>
   
  </Image>
                              
                              

                                <View style={styles.section}>
                                <Text style={{fontSize: 20, marginTop: 12}}><Text style={{fontWeight: '500'}}>Vote Count:</Text> {Math.round(result.vote_count)} </Text>
                                <Text style={{fontSize: 20, marginTop: 12}}><Text style={{fontWeight: '500'}}>Rating:</Text> {Math.round(result.vote_average)} </Text>
                                    <Text style={{fontSize: 20, marginTop: 12}}><Text style={{fontWeight: '500'}}>Popularity:</Text> {Math.round(result.popularity)} </Text>
                                    <Text style={{fontSize: 20, marginTop: 12}}><Text style={{fontWeight: '500'}}>Release Date:</Text> {result.release_date} </Text>
                                    <Text style={{fontSize: 20, marginTop: 12}}><Text style={{fontWeight: '500'}}>Overview:</Text> {result.overview} </Text>
                                </View>
                            </View>
                        )
                    })} 
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        
    },

    titleText: {
        fontSize: 24,
        marginTop: 18,
    },
    section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
})