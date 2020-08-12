import React, {Component} from 'react';
import './App.css';

//Components
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor () {
    super();
     this.state= {
        foods: [],
        searchField: ''
     }
  }
  componentDidMount() {
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=71504aa4cb664ea7879a8ffda25b8597&query=pasta')
    .then( response => response.json())
    .then( foods=> this.setState( {foods: foods.results}) );
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }
  render () {
    const { foods, searchField} = this.state; // this is destructuring, breaking an object to its including.
    const filterFoods= foods.filter(food => food.title.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Food to Cook</h1>
        {/* {console.log(this.state.foods)} */}
        <SearchBox placeholder='search food' handleChange= { this.handleChange } /> 
        {/* about the above line // we do not pass e or event to this method because the event is binded with it */}
        <CardList foods= {filterFoods}>
        
        </CardList>      
    </div>
    );
  }
}

export default App;
