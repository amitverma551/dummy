export const FetchMoreData = (state = false, action) => {
    switch (action.type) {
          case 'More_LIST_IS_LOADING':
                  state = action.isLoading;
          default:
                  return state;
    }
  };

export const fetchMoreDataApi = (state = [], action) => {
    switch (action.type) {
          case 'More_LIST_FETCH_SUCCESS':
              state =  [...state, action.items]
          default:
              return state;
    }
  };