import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/admin_panel/Layout";
import { StudentProvider } from "./context/StudentContext";

export default function App() {
  return (
    <StudentProvider>
      <Router>
        <Layout />
      </Router>
    </StudentProvider>
  );
}
