import React, { Component } from "react";
import { Link } from "react-router";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "test",
      fetched: [],
      axiosed: []
    };
  }
  componentWillMount() {
    this.props.sampleAction();
    this.props.sampleFetch();
    this.props.sampleAxios();
  }
  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        test: nextProps.sample,
        fetched: nextProps.fetchedData,
        axiosed: nextProps.axiosData
      },
      () => {
        console.log("-----------");
        console.log(this.state);
        console.log("-----------");
      }
    );
  }
  render() {
    let items = this.state.axiosed;
    const Person = props => <h3>{props.title}</h3>;

    return (
      <div>
        <Link to="/">Yo</Link>
        <p>Test, {this.state.test}</p>
        {items.map(dt => <Person key={dt.id} title={dt.title} />)}
      </div>
    );
  }
}
export default Test;
