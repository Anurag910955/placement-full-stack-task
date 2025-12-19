import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./admin/AdminDashboard";
import AddProject from "./admin/AddProject";
import AddClient from "./admin/AddClient";
import ViewContacts from "./admin/ViewContacts";
import ViewSubscribers from "./admin/ViewSubscribers";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-project" element={<AddProject />} />
        <Route path="/admin/add-client" element={<AddClient />} />
        <Route path="/admin/contacts" element={<ViewContacts />} />
        <Route path="/admin/subscribers" element={<ViewSubscribers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
