import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div >
        Dashboard
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

// function mapStateToProps({ auth }) {
//   return { auth };
// }

export default Dashboard;