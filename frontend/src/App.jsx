import { Routes, Route, Navigate } from "react-router-dom";
import { Auth, Manage } from "@/layouts";
function App() {
  return (
    <Routes>
      
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/manage/*" element={<Manage />} />
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  );
}

export default App;
