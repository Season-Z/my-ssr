import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getValue } from './store/action';

class Home extends Component {
  componentDidMount() {
    this.props.getValue();
  }

  render() {
    return (
      <div>
        <Link to="/">home</Link>
        <br />
        <Link to="/login">login</Link>
        <div>{this.props.name}</div>
        {this.props.newList}
        {/* <button onClick={(this.changeName)}>click</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.home.name,
  newList: state.home.newList
});

const mapDispatchToProps = dispatch => ({
  getValue: () => dispatch(getValue())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
