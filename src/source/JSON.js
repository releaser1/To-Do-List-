import React, { Component } from 'react'

class Json extends Component {
  render() {

    var myObj = {name: "John", age: 31, city: "New York"};
    var myJSON = JSON.stringify(myObj);
    console.log(myJSON)

    let deschide = JSON.parse(myJSON);
    console.log(deschide)


    return (
      <div>
          <h3>hell yeah</h3>
      </div>
    )
  }
}

export default  Json