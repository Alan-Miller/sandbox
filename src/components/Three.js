import React, {Component} from 'react';
import '../css/App.css';
import {getClothes} from '../services/clothesService';
import {getStarWars} from '../services/starWarsService';

class Three extends Component {

  constructor() {
    super()

    this.state = {
      itemsArray: []
    }
  }

  getData(serviceFn) {
    serviceFn().then(apiData => {
      this.setState({
        itemsArray: apiData.results || apiData
      })
      console.log('this.state.itemsArray', this.state.itemsArray);
    })
  }

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

export default Three;







// import React, {Component} from 'react';
// import {getStarWars} from '../services/starWarsService';
// import {getClothes} from '../services/clothesService';
// import {GetData} from '../services/clothesService';
// import '../css/App.css';

//
// class Three extends Component {
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       itemsArray: []
//     }
//     this.getData = this.getData.bind(this);
//   }
//
//   getData(serviceFn) {
//     serviceFn().then(apiData => {
//       this.setState({
//         itemsArray: apiData.results || apiData
//       })
//     })
//   }

  // componentDidMount() {
  //   getClothes().then(apiData => {
  //     this.setState({
  //       itemsArray: apiData.results || apiData
  //     })
  //     console.log('this.state.itemsArray', this.state.itemsArray);
  //   })
  // }
//
//   render() {
//
//     const listItems = this.state.itemsArray.map((item, i) => (
//       <li key={i}>{item.name || item.title}</li>
//     ))
//
//     return (
//       <section className="section-three">
//         <h2>API calls!</h2>
//         <button onClick={() => this.getData(getStarWars)} >Star Wars</button>
//         <button onClick={() => this.getData(getClothes)} >Clothes</button>
//         <ul>
//           {listItems}
//         </ul>
//       </section>
//     )
//   }
// }
//
// export default Three
