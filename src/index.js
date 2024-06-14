import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/Privacy_Policy';
import Projects from './pages/Projects';
import CreativePoint from './pages/CreativePoint';
import { ScrollToTop } from './pages/Utils';
import { app, analytics } from './firebase';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Router>
        <ScrollToTop/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Privacy_Policy" element={<PrivacyPolicy />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/CreativePoint" element={<CreativePoint />} />
        </Routes>
    </Router>
);