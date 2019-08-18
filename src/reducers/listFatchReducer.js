export const listIsLoading = (state = false, action) => {
    switch (action.type) {
          case 'LIST_IS_LOADING':
                  state = action.isLoading;
          default:
                  return state;
    }
  };

  export const BeautylistFetchDataSuccess = (state = [], action) => {
    switch (action.type) {
          case 'BEAUTY_LIST_FETCH_SUCCESS':
              state =  [...state, action.items]
          default:
              return state;
    }
  };


  export const CelebritylistFetchDataSuccess = (state = [], action) => {
    switch (action.type) {
          case 'CELEBRITY_LIST_FETCH_SUCCESS':
              state =  [...state, action.items]
          default:
              return state;
    }
  };

  export const FashionlistFetchDataSuccess = (state = [],action)=>{
     switch(action.type){
       case 'FASHION_LIST_FETCH_SUCCESS':
         state = [...state, action.items];
         default:
           return state;
     }
  }

  export const LifelistFetchDataSuccess = (state = [],action)=>{
    switch(action.type){
      case 'LIFE_LIST_FETCH_SUCCESS':
        state = [...state, action.items];
        default:
          return state;
    }
 }

 export const RelationshipslistFetchDataSuccess = (state = [],action)=>{
  switch(action.type){
    case 'RELATIONSHIPS_LIST_FETCH_SUCCESS':
      state = [...state, action.items];
      default:
        return state;
  }
}

  export const listFetchDataSuccess = (state = [], action) => {
    switch (action.type) {
          case 'LIST_FETCH_SUCCESS':
              state =  [...state, action.items]
          default:
              return state;
    }
  };