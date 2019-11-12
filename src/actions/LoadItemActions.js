const MoreItemIsLoading = bool => ({
    type: 'More_LIST_IS_LOADING',
    isLoading: bool
  });

const FetchMoreData = items => ({
    type: 'More_LIST_FETCH_SUCCESS',
    items
  });

  const LoadMoreData = items => ({
    type: 'LOAD_MORE_DATA',
    items
  });
  
  export const fetchMoreDataApi = url => {
      return dispatch => {
        fetch(url)
          .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
          })
          .then(response => response.json())
          .then(items => dispatch(FetchMoreData(items)))
      }
    };

    export const fetchLoadMoreData = url => {
      return dispatch => {
        fetch(url)
          .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
          })
          .then(response => response.json())
          .then(items => dispatch(LoadMoreData(items)))
      }
    };

   export const rootReducer = () =>{
     return {
        type: 'ROOT_REDUCER',
      }
   } 