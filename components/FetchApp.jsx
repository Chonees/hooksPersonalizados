import { useFetch } from "../Hooks/useFetch";
export const FetchApp = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, isLoading, error } = useFetch(url);

  return (
    <>
      <h2 className="h2">Lista de usuarios:</h2>
      <br />
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : error ? (
        <h4>Hubo un error : {error}</h4>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user) => {
                return (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </>
  );
};
