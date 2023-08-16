import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Todos from "./pages/Todos/Todos";
import AddUser from "./pages/Users/AddUser";
import UsersList from "./pages/Users/UsersList";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="todos" element={<Todos />} />
          <Route path="users">
            <Route element={<UsersList />} />
            <Route path="add-user" element={<AddUser />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
