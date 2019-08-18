const listIsLoading = bool => ({
    type: 'LIST_IS_LOADING',
    isLoading: bool
  });

const listFetchDataSuccess = items => ({
    type: 'LIST_FETCH_SUCCESS',
    items
  });
  
  const BeautyFetchDataSuccess = items => ({
    type: 'BEAUTY_LIST_FETCH_SUCCESS',
    items
  });
 
  const CelebrityFetchDataSuccess = items => ({
    type: 'CELEBRITY_LIST_FETCH_SUCCESS',
    items
  });

  const FashionFetchDataSuccess = items => ({
    type: 'FASHION_LIST_FETCH_SUCCESS',
    items
  });

  const LifeFetchDataSuccess = items => ({
    type: 'LIFE_LIST_FETCH_SUCCESS',
    items
  });

  const RelationshipsFetchDataSuccess = items => ({
    type: 'RELATIONSHIPS_LIST_FETCH_SUCCESS',
    items
  });

  
export const fetchBeautyData = url =>{
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
      .then(items => dispatch(listIsLoading(false)) && dispatch(BeautyFetchDataSuccess(items)))
  }
}

export const fetchCelebrityData = url =>{
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
      .then(items => dispatch(listIsLoading(false)) && dispatch(CelebrityFetchDataSuccess(items)))
  }
}

export const fashionDataApi = url =>{
  return dispatch =>{
    dispatch(listIsLoading(true));
    fetch(url)
    .then(response=>{
      if(!response.ok ){
        throw Error(response.statusText);
      }else{
        return response;
      }
    })
    .then(response=>response.json())
    .then(items=>dispatch(listIsLoading(false) && dispatch(FashionFetchDataSuccess(items))))
     
  }
}

export const lifeDataApi = url =>{
  return dispatch =>{
    dispatch(listIsLoading(true));
    fetch(url)
    .then(response=>{
      if(!response.ok ){
        throw Error(response.statusText);
      }else{
        return response;
      }
    })
    .then(response=>response.json())
    .then(items=>dispatch(listIsLoading(false) && dispatch(LifeFetchDataSuccess(items))))
     
  }
}

export const RelationshipsDataApi = url =>{
  return dispatch =>{
    dispatch(listIsLoading(true));
    fetch(url)
    .then(response=>{
      if(!response.ok ){
        throw Error(response.statusText);
      }else{
        return response;
      }
    })
    .then(response=>response.json())
    .then(items=>dispatch(listIsLoading(false) && dispatch(RelationshipsFetchDataSuccess(items))))
     
  }
}

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