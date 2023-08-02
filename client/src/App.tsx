import "./App.css";
import Todos from "./pages/Todos/Todos";
import AddUser from "./pages/Users/AddUser";
import UsersList from "./pages/Users/UsersList";

function App() {
  return (
    <div className="App">
      <Todos />
      <AddUser />
      <UsersList />
    </div>
  );
}

export default App;
