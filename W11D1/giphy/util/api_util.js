export const fetchSearchGiphys = searchTerm => (
  $.ajax({
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=2ZpSnlaD4Z3uAfgwusP3oQJMqWbJwIrk&limit=2`,
    method: 'GET'
  })
);
