import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, ScrollView, TextInput, Button , View} from 'react-native';
import { render } from 'react-dom';
import Recipe from "./Recipe";



//import demoview from "./demoview";

const App = () => {
const APP_ID = "84b2fc3b";
const APP_KEY = "2e47ae3bf7daeb313771ed2edea9e4c3";

const [recipes ,setRecipes] = useState([])
const [search, setSearch] = useState('')
const [query , setQuery] = useState('apple')

useEffect(() => {
  getRecipes();
}, [query]);


const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  //console.log(data.hits);
}
 

 const getSearch = () => {
   setQuery(search);
   
 }
 

 return(
   

  <ScrollView  style={{backgroundColor:'black'}}>
    
    <Text style={{fontSize:30, color:'red', textAlign: 'center',marginTop:30}}>Welcome to FOODIES</Text>
    
    <TextInput style={{justifyContent: "center",
    padding:10,
    alignItems: "flex-end",
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderTopWidth:5,
    borderBottomWidth :5,
    height: 50,
    marginBottom: 10,
    borderColor: "red",color:'white'}
    } class= "search-bar"  onChangeText={text => setSearch(text)} value={search}></TextInput>
    
    <Button class="search-button"  title="search" onPress={getSearch} color='green'></Button>

    
    <View contentContainerStyle={{marginTop:20}}>

    
{recipes.map( recipes => (

  <Recipe
  key={recipes.recipe.calories}
  title= {recipes.recipe.label}
  calories={recipes.recipe.calories}
  images= {recipes.recipe.image}
  />
))}
</View>

   
  </ScrollView>
 );
};

const styles = StyleSheet.create({
  searchbar:{
    marginBottom: 20
  }
});

export default App;