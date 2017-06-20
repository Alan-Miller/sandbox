import React, {Component} from 'react';
import {getStarWars} from '../services/starWarsService';
import {getClothes} from '../services/clothesService';
import {GetData} from '../services/clothesService';
import '../css/App.css';


class Three extends Component {

  constructor(props) {
    super(props)
    this.state = {
      itemsArray: []
    }
    this.getData = this.getData.bind(this);
  }

  getData(serviceFn) {
    serviceFn().then(dataObj => {
      this.setState({
        itemsArray: dataObj.results || dataObj
      })
    })
  }

  // componentDidMount() {
  //   getClothes().then(dataObj => {
  //     this.setState({
  //       itemsArray: dataObj.results || dataObj
  //     })
  //     console.log('this.state.itemsArray', this.state.itemsArray);
  //   })
  // }

  render() {

    const listItems = this.state.itemsArray.map((item, i) => (
      <li key={i}>{item.name || item.title}</li>
    ))

    return (
      <section className="section-three">
        <h2>API calls!</h2>
        <button onClick={() => this.getData(getStarWars)} >Star Wars</button>
        <button onClick={() => this.getData(getClothes)} >Clothes</button>
        <ul>
          {listItems}
        </ul>
      </section>
    )
  }
}

export default Three
