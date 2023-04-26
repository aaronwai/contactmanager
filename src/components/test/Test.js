import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
  };
  componentDidMount() {
    // run after, usually, for initial request, fetching data purposes
    // testing the api by fetching samples
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
  }

  //   componentWillMount() {
  //     // run before mounting
  //     // perform any necessary setup before the component is rendered. This can include fetching data or initializing variables that are required for rendering.
  //     // However, it's worth noting that in most cases, you should use componentDidMount() instead of componentWillMount(). This is because componentDidMount() is called after the component has been mounted, which means that you can safely interact with the DOM and perform any necessary setup that requires access to the DOM.
  //     fetch("https://api.example.com/data")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         this.setState({ data });
  //       });
  //   }
  //   componentDidUpdate() {
  //     // run only state of props changes
  //   }
  //   componentWillUpdate() {}
  //   componentWillReceiveProps(nextProps, nextState) {
  //     // receive new properties then run
  //   }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
