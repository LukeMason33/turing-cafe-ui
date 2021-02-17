const fetchRequests = {
  handleFetchError: (response) => {
    if(!response.ok) {
      const errorMessage = 'Our server is having a hard time at the moment. Try refreshing the page!';
      throw errorMessage;
    }
    return response;
  },

  fetchReservations: () => {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => fetchRequests.handleFetchError(response))
      .then(response => response.json())
  }
}

export default fetchRequests;
