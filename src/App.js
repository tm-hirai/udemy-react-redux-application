import React from 'react';

class App extends React.Component {
  render() {
    // const greeting = "Hi Tom"
    // const dom = <h1 className="foo">{greeting}</h1>
    // return (
    //   dom
    // );
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        < input type="text" onChange={() => { console.log("clicked") }} />
      </React.Fragment>
    )



  }
}

export default App;
