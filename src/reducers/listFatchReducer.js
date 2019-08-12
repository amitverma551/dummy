export const listIsLoading = (state = false, action) => {
    switch (action.type) {
          case 'LIST_IS_LOADING':
                  state = action.isLoading;
          default:
                  return state;
    }
  };

export const listFetchDataSuccess = (state = [], action) => {
    switch (action.type) {
          case 'LIST_FETCH_SUCCESS':
              state =  [...state, action.items]
          default:
              return state;
    }
  };