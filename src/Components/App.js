import GlobalStyles from "Components/GlobalStyles";
import Landing from "Views/Landing";
import FullPages from "Components/FullPages";
import React, { Component } from "react";
class App extends Component {
  componentWillMount() {
    this.setState({ _loading: true });
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ _loading: false });
    }, 2000);
  }
  render() {
    return (
      <>
        <GlobalStyles />
        {this.state._loading == false ? <FullPages /> : <Landing />}
      </>
    );
  }
}

export default App;
