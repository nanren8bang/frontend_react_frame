export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};

function get(url) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);    
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function handleResponse(response) {
    //return response.text().then(
    return response.json().then(
                                text => {
                                          //const data = text && JSON.parse(text);
                                          const status=text.status;
                                          //console.log("In FetchWrapper, the return status type is "+(typeof status) );
                                          //console.log("In FetchWrapper, the return status is "+status);
                                          if (status===true){
                                              const data = text.data;
                                              console.log("In FetchWrapper, the return status is "+status);
                                              console.log("In FeachWrapper,     return data   is: "+JSON.stringify(data) ) ;
                                              return data;
                                          }
                                          if (status===false){
                                              const error= text.error;
                                              console.log("In FeachWrapper,return error is: "+JSON.stringify(error) ) ;
                                              //return error;               //or popr up error message and terminate the process
                                              return Promise.reject(error);  
                                          }

                                          /* 
                                          if (!response.ok) {
                                                             const error = (data && data.message) || response.statusText;
                                                             return Promise.reject(error);
                                                           }
                                          if (Array.isArray(data)) console.log("In FeachWrapper,data is     JS Array, "+JSON.stringify(data) ) ;
                                          else                     console.log("In FeachWrapper,data is NOT JS Array, see below: "+JSON.stringify(data).data ) ;
                                          */

                                          return null;
                                           
                                        }
                               );
}

