
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Login } from "./components";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
      <div className="App">
        <Router>
          <main>
            <Routes>
              <Route
                path="/login"
                element={
                  <div className="login-page">
                    <Login
                      username={username}
                      setUsername={setUsername}
                      password={password}
                      setPassword={setPassword}
                    />
                  </div>
                }
              />
              <Route
                path="/register"
                element={
                  <div className="login-page">
                    <Register
                      username={username}
                      setUsername={setUsername}
                      password={password}
                      setPassword={setPassword}
                    />
                  </div>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <div className="dashboard-page">
                    <Dashboard
                      username={username}
                    />
                  </div>
                }
                />
            </Routes>
          </main>
        </Router>
        </div>
      );
}

export default App;