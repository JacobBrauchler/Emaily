import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div className="collection">
        <a href="/surveys" className="collection-item">Survey1</a>
        <a href="/surveys" className="collection-item">Survey2</a>
        <a href="/surveys" className="collection-item">Survey3</a>
        <a href="/surveys" className="collection-item">Survey4</a>
      </div>
    );
  }
}

// function mapStateToProps({ auth }) {
//   return { auth };
// }

export default Dashboard;