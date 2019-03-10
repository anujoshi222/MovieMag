import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image} from 'react-native';

const { height } = Dimensions.get('window');

export default class Popular extends Component {
    state={
        results:[],
        HeightScreen: 0,
    };
componentDidMount=async()=>{
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=8367b1854dccedcfc9001204de735470&language=en-US`


  axios
          .get(url)
          .then(data => {
              this.setState({
                  results: data.data.results
              })
          })

}
    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ HeightScreen: contentHeight });
      };  

      
   
  render() {
    const scrollEnabled = this.state.HeightScreen > height;

    return (
        <ScrollView
        scrollEnabled={scrollEnabled}
        onContentSizeChange={this.onContentSizeChange}
        style={{padding: 12, maxWidth: '100%'}}>


<View style={styles.container}>
{this.state.results.slice(0, 20).map((result, i) => {
                        return (
                            <View key={i} style={styles.Wrapper}>
                                <View > 
                                    <Image style={styles.ImgStyle } source={{uri: `https://image.tmdb.org/t/p/original/${result.poster_path}`}} />
                                </View>
                                <View style={{paddingLeft: 12, width: 0, flexGrow: 1}}>
                                    <Text style={styles.Title}>{result.title}</Text>
                                    <Text style={{fontSize: 17}} numberOfLines={5}>{result.overview}</Text>
                                </View>
                            </View>
                        )
                    })}
 
 
 </View>


     </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 8,
    },
    ImgStyle:{
        width: 150,
         height: 150,
         borderWidth: 2,
         borderRadius: 75, 
         resizeMode: 'cover',
         borderColor:'#1a85dd',borderBottomWidth:1,borderTopWidth:1  

    },
    Wrapper: {
        marginTop: 3,
        marginBottom: 3,
        display: 'flex',
        flexDirection: 'row',
        height: 175,
        maxWidth: '100%',
          }
   
})
