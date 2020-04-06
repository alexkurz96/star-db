import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withDataDetail = (View) => {
  return class extends Component{
    state = {
      item: null,
      image: null,
      loading: false,
      error: false
    };
  
    componentDidMount() {
      this.updateItem();
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.updateItem();
      }
    }
  
    onItemLoaded = (item) => {
      this.setState({
        item,
        image: this.props.getImageUrl(item),
        loading: false,
        error: false
      });
    };
  
    updateItem() {
      const {itemId, getData} = this.props;
      if (!itemId) {
        return;
      }
      this.setState({loading: true});
      getData(itemId)
        .then(this.onItemLoaded)
        .catch(this.onError);
    }
  
    onError = (err) => {
      console.log(err);
      this.setState({
        error: true,
        loading: false
      })
    };
    render() {
      const {item, error, loading, image} = this.state;
    
      const errorMessage = error ? <ErrorIndicator /> : null;
      const spinner = loading ?  <Spinner /> : null;
      return (
        <View 
          {...this.props} 
          data={item} 
          image={image}
          errorMessage={errorMessage}
          spinner={spinner}
        />
      );
    }
  };
};

export default withDataDetail;