import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeShare } from '../ducks/recover';
import './RecoverStatusShare.scss';


export class RecoverStatusShare extends Component {
  static propTypes = {
    share: PropTypes.shape({
      data: PropTypes.string.isRequired,
      error: PropTypes.string,
    }),
    current: PropTypes.bool,
    dispatch: PropTypes.func,
    index: PropTypes.number
  }

  handleRemove() {
    this.props.dispatch(removeShare(this.props.index));
  }

  render() {
    const { share, current } = this.props;
    let className;

    if (current) {
      className = 'current';
    } else if (!share) {
      className = 'incomplete';
    } else if (share.error) {
      className = 'error';
    } else {
      className = 'success';
    }

    return (
      <div className={`progress-icon ${className}`}>
        <i className="fa fa-cube" />
        <i className="fa fa-close" onClick={this.handleRemove.bind(this)} />
      </div>
    );
  }
}

export default connect()(RecoverStatusShare);