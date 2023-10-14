import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Codeleap</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
