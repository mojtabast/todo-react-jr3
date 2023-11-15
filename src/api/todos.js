const todos_api_url = "https://jsonplaceholder.typicode.com/todos";

export function get_todos_list() {
  return fetch(todos_api_url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}
