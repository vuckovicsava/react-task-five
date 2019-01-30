import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.root = document.getElementById('modal-root');
  }

  componentDidMount() {
    this.root.appendChild(this.el);
  }

  componentWillUnmount() {
    this.root.removeChild(this.el);
  }

  render() {
    const { title, onClose, children } = this.props;

    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__content">
          <div className="modal__header">
            <h3 className="modal__title">{title}</h3>
            <span 
              className="modal__close"
              onClick={onClose}
            >
              <i class="fas fa-window-close"></i>
            </span>
          </div>
          <div className="modal__body">
            {children}
          </div>
        </div>
      </div>,
      this.el
    );
  }
}