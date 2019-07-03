import React from 'react';
import { connect } from 'react-redux';
import { setLoading } from '../state/actions/loading';

function withLoading(WrappedComponent) {
  const ToExtend = class extends React.Component {
    componentDidMount() {
      this.props.setLoading(false);
    }
    
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return connect(
    mapStateToProps,
    { setLoading }
  )(ToExtend);
}

const mapStateToProps = state => {
  return {
    isLoading: state.loading.isLoading
  };
};

export default withLoading;
