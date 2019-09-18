import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getValue } from './store/action';

class Home extends Component {
  componentDidMount() {
    // this.props.getValue();
  }

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        {/* <button onClick={(this.changeName)}>click</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.home.name
});

const mapDispatchToProps = dispatch => ({
  getValue: dispatch(getValue())
});

export default connect(
  mapStateToProps,
  null
)(Home);
