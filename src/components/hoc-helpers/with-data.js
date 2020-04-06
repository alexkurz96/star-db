import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  return class extends Component{
    state = {
      data: null
    };

    componentDidMount() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            error: false
          });
        })
        .catch(this.onError);
    }

    onError = (err) => {
      this.setState({
        error: true
      })
    };
    render() {
      const {data, error} = this.state;

      const errorMessage = error ? <ErrorIndicator /> : null;
      const spinner = !data && !error ?  <Spinner /> : null;
      return (
        <View 
          {...this.props} 
          data={data} 
          errorMessage={errorMessage}
          spinner={spinner}
        />
      );
    }
  };
};

export default withData;