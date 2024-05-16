import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/Privacy_Policy';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Privacy_Policy" element={<PrivacyPolicy />} />
        </Routes>
    </Router>
);