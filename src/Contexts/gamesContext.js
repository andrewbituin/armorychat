import React, { Component } from 'react';

const GamesContext = React.createContext({

  gamesList: [],
  setGamesList: () => {}

})

export default GamesContext

export class GamesProvider extends Component {
  constructor(props){
    super(props)
    const state = 
    { gamesList: [] }
    this.state = state;
  }
  setGamesList = gamesList => {
    this.setState({gamesList});
  }

  render(){
    const value = {
      gamesList: this.state.gamesList,
      setGamesList: this.setGamesList
    }
    return (
      <GamesContext.Provider value={value}>
      {this.props.children}
      </GamesContext.Provider>
    )
  }
}

  