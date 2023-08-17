import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("todotoken");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

console.log(httpLink);

// export const isLoggedInVar = makeVar<string | null>(localStorage.getItem("todoToken"));
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // uri: "http://localhost:3000/graphql/",
  headers: {
    authorization: localStorage.getItem("token") || "",
  },
  cache: new InMemoryCache(),
});
