import React from "react";

import '../App.css';

export default class MueslisPage extends React.Component {
  state = {
    muesliData: {
      result: []
    }
  }

    render() {
        return <div>
            <main id="content-area">
            {/* Default content is Products/Prices table */}
            <h1>My mueslis</h1>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                </tr>
                </thead>
                <tbody>
                {/*<tr><td>1</td><td>Classic Muesli</td><td>$4.65</td></tr>*/}
                {/*JSON.stringify(this.state.muesliData)*/}
                {this.state.muesliData.result.map(muesli=>{
                    return <tr key={muesli.id}>
                    <td>{muesli.id}</td>
                    <td>{muesli.name}</td>
                    <td>{muesli.price}</td>
                    </tr>
                })}
                </tbody>
            </table>
            </main>             
        </div>
    }

  async componentDidMount() {
    try {
      let muesliData = await fetch('http://localhost:3333/mueslis')
      console.log('muesliData', muesliData)
      muesliData = await muesliData.json()
      console.log('muesliData', muesliData)

      this.setState({muesliData})
    } catch(e) {
      console.warn(e)
    }
  }    
}