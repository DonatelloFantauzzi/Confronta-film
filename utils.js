// ─────DIAMO UN SETTIMEOUT PER NON FARE TROPPE RICHIESTE INSIEME, DOPO UN SECONDO PARTE LA RICERCA────────────────────────────────────────────────────────────────────────
// ──────DEBOUNCE FUNCTION───────────────────────────────────────────────────────────────────────

const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // console.log(...args);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

// const onInput = async (event) => {
// console.log(event)
//   const movies = await fetchData(event.target.value);
//   console.log(movies);
// };
