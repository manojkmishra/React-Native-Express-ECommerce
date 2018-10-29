import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { StatusBar, FlatList } from 'react-native';
import CategoryCard from '../components/CategoryCard';

const categories = [
  { id: 1, title: 'Grocery', image: require('../../assets/img/cart.png'), },
  { id: 2, title: 'Drugs', image: require('../../assets/img/drugs.png'), },
  { id: 3, title: 'Pets', image: require('../../assets/img/pets.png'), },
  { id: 4, title: 'video games',  },
];

const NUM_COLUMNS = 3;

class HomeScreen extends Component 
{   static navigationOptions = {  title: 'HomeTitle',  };
  
    state={};
    renderItem = ({ item }) => < CategoryCard {...item}/>
    render() 
    {    console.log('/HomeScreen-this.props',this.props);

      return (
        <Box f={1} >
          <StatusBar barStyle="light-content" />
          <Box h={130} bg="red" w={1}>
            <Text>HomeScreen</Text>
          </Box>
          <Box f={1} bg="blue" >
            <FlatList
              data={categories}
              renderItem={this.renderItem}
            // numColumns={NUM_COLUMNS}
             />
          </Box>
         
        </Box>
      );
    }
}
  
export default HomeScreen;