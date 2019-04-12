import React, { Component } from 'react';
import M from 'materialize-css';


class Prediction extends Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      M.Modal.init(elems);
    });
  }
  
  render() {

    return (
      <div className = 'modal-trigger'>

        <div id="modal1" className="modal">
          <div className="modal-content">
          <p>Hello</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
        <button data-target="modal1" className="btn modal-trigger" >Prediction</button>
      </div>
    )
  }
}

export default Prediction;