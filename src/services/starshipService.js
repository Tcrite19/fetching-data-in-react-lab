const BASE_URL='https://swapi.dev/api/starships';

const show = async (ships) => {
    try {
      const queryString = `/?search=${ships}`;
      const res = await fetch(BASE_URL + queryString);
      const data = await res.json();
      console.log('Data:', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  console.log(show('Death Star'));
export { show }