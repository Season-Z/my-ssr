import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getValue } from './store/action';
import styles from './style.css';

class Home extends Component {
  static loadData = store => {
    return store.dispatch(getValue());
  };

  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss());
    }
  }

  componentDidMount() {
    if (!this.props.newList) {
      this.props.getValue();
    }
  }

  render() {
    return (
      <div className={styles.red}>
        <Link to="/">home</Link>
        <br />
        <Link to="/login">login</Link>
        <div>{this.props.name}</div>
        {this.props.newList && <div>{this.props.newList}</div>}
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
