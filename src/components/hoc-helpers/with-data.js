import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  return class extends Component{
    state = {
      data: null,
      loading: false,
      error: false
    };

    onItemLoaded = (data) => {
      this.setState({
        data,
        loading: false,
        error: false
      });
    };

    componentDidMount() {
      this.updateItem();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.updateItem();
      }
    }

    updateItem() {
      this.setState({
        loading: true,
        error: false,
        data: null
      });
      this.props.getData()
        .then(this.onItemLoaded)
        .catch(this.onError);
    }

    onError = (err) => {
      this.setState({
        error: true,
        loading: false
      })
    };
    render() {
      const {data, error, loading} = this.state;

      const errorMessage = error ? <ErrorIndicator /> : null;
      const spinner = loading ?  <Spinner /> : null;
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