const MoreItemIsLoading = bool => ({
    type: 'More_LIST_IS_LOADING',
    isLoading: bool
  });

const FetchMoreData = items => ({
    type: 'More_LIST_FETCH_SUCCESS',
    items
  });
  
  export const fetchMoreDataApi = url => {
      return dispatch => {
        dispatch(MoreItemIsLoading(true));
        fetch(url)
          .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
          })
          .then(response => response.json())
          .then(items => dispatch(MoreItemIsLoading(false)) && dispatch(FetchMoreData(items)))
      }
    };