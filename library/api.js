class Api {
  static get(url) {
    return fetch(url, {
      credentials: 'include'
    }).then(res => res.json());
  }

  static post(url, data) {
      fetch(url, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)

    })
    .then(res=>{
       return res.json();
    })
  }
}

export default Api;