import React  from 'react';
import {View, Text,StyleSheet,Button,ImageBackground} from 'react-native';
import { Card , Icon} from 'react-native-elements';
import { render } from 'react-dom';


const Recipe = ({title,calories,images}) => {

  return(
    
  
<ImageBackground 
source={ { uri: "https://d39l2hkdp2esp1.cloudfront.net/img/photo/126786/126786_00_2x.jpg?20170622034644" }}
 style={styles.image}>
  <View style={{alignItems:'center',opacity:1}}>
  <Card opacity={1}
          title={title}
          image={{ uri: images }}>
          <Text style={{ width: 250, fontWeight: "bold", marginBottom: 10 }}>
            Calories:
                  {calories}
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' 
            />
        </Card>
  </View>
        
    </ImageBackground>

  );
  
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom:5,
    color:'white'
    
  },
  caloriText:{
    marginBottom:5,
    color:'white'
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
    
  }

});


export default Recipe;