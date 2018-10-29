import React, { PureComponent } from 'react';
import { Box, Text } from 'react-native-design-utility';

class CategoryCard extends PureComponent {
  state = {};
  render() 
  { const {title}=this.props;   
    return (            
          <Box w={1/3} bg="white" h={120} center>
            <Text >{title}</Text>
          </Box>  
    );
  }
}
export default CategoryCard;