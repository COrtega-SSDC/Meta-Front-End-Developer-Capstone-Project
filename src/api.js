// src/api.js
const seededRandom = seed => {
    const modulus = 2 ** 35 - 31;
    const multiplier = 185852;
    let state = seed % modulus;
  
    return () => {
      state = (state * multiplier) % modulus;
      return state / modulus;
    };
  };
  
  const fetchAPI = dateString => {
    const date = new Date(dateString);
    const random = seededRandom(date.getDate());
    const result = [];
  
    for (let hour = 17; hour <= 23; hour++) {
      if (random() < 0.5) result.push(`${hour}:00`);
      if (random() < 0.5) result.push(`${hour}:30`);
    }
  
    // Simulate an asynchronous API call with a Promise
    return Promise.resolve(result);
  };
  
  const submitAPI = formData => {
    // Simulate form submission success
    return Promise.resolve(true);
  };
  
  export { fetchAPI, submitAPI };
  