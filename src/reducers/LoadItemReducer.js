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
              state = [action.items];
          default:
              return state;
    }
  };


  export const fetchLoadMoreDataApi = (state = [], action) => {
    switch (action.type) {
          case 'ROOT_REDUCER':
            return state = [];
          case 'LOAD_MORE_DATA':
            return state = state.concat(action.items);
          default:
              return state;
    }
  };


  export const getPostId = (state = [], action) => {
    switch (action.type) {
          case 'GET_POST_ID':
              state =  [...state, action.postId]
          default:
              return state;
    }
  }; 