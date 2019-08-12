const listIsLoading = bool => ({
    type: 'LIST_IS_LOADING',
    isLoading: bool
  });

const listFetchDataSuccess = items => ({
    type: 'LIST_FETCH_SUCCESS',
    items
  });
  
  export const fetchDataApi = url => {
      return dispatch => {
        dispatch(listIsLoading(true));
        fetch(url)
          .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
          })
          .then(response => response.json())
          .then(items => dispatch(listIsLoading(false)) && dispatch(listFetchDataSuccess(items)))
      }
    };