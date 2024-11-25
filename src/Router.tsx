import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageTemplate from './pages/PageTemplate';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import PostDetailPage from './pages/PostPage/PostDetailPage';
import PostOwnerPage from './pages/PostOwnerPage';
import Page404 from './pages/Page404';
import PostContextProvider from './contexts/PostContextProvider';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="posts/:postId" element={<PostContextProvider><PostPage /></PostContextProvider>}>
            <Route index element={<PostDetailPage />} />
            <Route path="detail" element={<PostDetailPage />} />
            <Route path="owner/:userId" element={<PostOwnerPage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;