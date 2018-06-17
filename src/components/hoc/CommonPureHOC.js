import React from 'react';

export const CommonPureComponent = (WrappedComponent) => (
  class extends React.PureComponent {
    render = () => {
      return <WrappedComponent {...this.props} />;
    }
  }
)
