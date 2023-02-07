
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Profile } from './pages';
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <div>
            <Routes>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Profile} />
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
