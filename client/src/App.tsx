import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import { Login } from "./pages/Login/Login";
import Todos from "./pages/Todos/Todos";
import AddUser from "./pages/Users/AddUser";
import UsersList from "./pages/Users/UsersList";

function PrivateOutlet() {
  const auth = localStorage.getItem("todotoken");
  return auth ? <Outlet /> : <Navigate to="/" />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="todos" element={<PrivateOutlet />}>
            <Route index element={<Todos />} />
            <Route path="users">
              <Route element={<UsersList />} />
              <Route path="add-user" element={<AddUser />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
