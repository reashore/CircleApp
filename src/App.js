
import React, { Component } from 'react';
import Circle from './Components/Circle';

class App extends Component {
  render() {
    let colors = ["#393e41", "#e94f37", "#1c89bf", "#a1d363", "#85ffc7", "#297373", "#ff8552", "#a40e4c"];
    let renderData = [];

    for (let i = 0, n = colors.length; i < n; i++) {
      let color = colors[i];
      renderData.push(<Circle key={i + color} bgColor={color} />);
    }

    return (
      <div >
        <h1>Circle App</h1>
        <Circle bgColor="#F9C240" />
        <hr />
        {renderData}
      </div>
    );
  }
}

export default App;
