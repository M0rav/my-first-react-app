import React, { ChangeEvent, Component } from 'react';
import logo from './logo.svg';
import './App.css';
interface State {
  datum: Date;
  dobas: number;
  meret: number;
}
class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      datum: new Date(),
      dobas: 0,
      meret: 14,
    }
    setInterval(() => {
      this.setState({
        datum: new Date()
      });
    }, 1000);
  }
  kockadobas =() => {
    const ujSzam = Math.floor(Math.random() * 6 + 1 );//0-6 között ad random számot
    this.setState({
      dobas:ujSzam
    })
  }
  betumeret =(e: ChangeEvent) => {
    let ujmeret = parseInt((e.currentTarget as HTMLInputElement).value);
    this.setState({
      meret: ujmeret
    })
  }

  render() {
    return <div style={{ fontSize: this.state.meret + "pt"}}>
      <p id="hello" style ={{
        fontStyle: 'italic',
        color: 'limegreen'   
      }}>
        { this.state.datum.toLocaleString() }
      </p>
      <p className="kockadobas">Kockadobás eredménye: {this.state.dobas }</p>
      <button onClick={this.kockadobas}>Kockadobás</button>
      <div>
    <label htmlFor="FontSizeChange">Kérlek add meg a kívánt betűméretet: </label>
    <input type="number" placeholder='Ide' min={8} onChange={this.betumeret}/>
    </div>
    </div>;
   
  }
}
export default App;