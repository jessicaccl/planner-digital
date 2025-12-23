import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';

export function Router() {
  return (   
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/business" element={<Dashboard />} />
      <Route path="/kids" element={<Dashboard />} />
      <Route path="/personal" element={<Dashboard />} />
    </Routes>
  );
}