const mutableFetch = (params, method) => {
    params = params ? params : '';
    method = method ? method : { method: 'GET' }
  
      return fetch(`https://thawing-savannah-14380.herokuapp.com/api/${params}`, method) //http://localhost:8000/
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
  }
  
  export default mutableFetch;