import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, lazy, Suspense } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Podcast from './pages/Podcast';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import Services from './pages/Services';
import EventHosting from './pages/EventHosting';
import Marketing from './pages/Marketing';
import ContentCreation from './pages/ContentCreation';
import MediaProduction from './pages/MediaProduction';
import Gallery from './pages/Gallery';
import BackyardRav from './pages/BackyardRav';

// Lazy load components
const LazyPodcast = lazy(() => import('./pages/Podcast'));
const LazyContact = lazy(() => import('./pages/Contact'));
const LazyNewsletter = lazy(() => import('./pages/Newsletter'));
const LazyServices = lazy(() => import('./pages/Services'));
const LazyEventHosting = lazy(() => import('./pages/EventHosting'));
const LazyMarketing = lazy(() => import('./pages/Marketing'));
const LazyContentCreation = lazy(() => import('./pages/ContentCreation'));
const LazyMediaProduction = lazy(() => import('./pages/MediaProduction'));
const LazyGallery = lazy(() => import('./pages/Gallery'));
const LazyBackyardRav = lazy(() => import('./pages/BackyardRav'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/podcast" element={
           <Suspense fallback={
            <div className='min-h-screen bg-black text-white flex items-center justify-center'>
              Loading...</div>}>
            <LazyPodcast />
          </Suspense>
        } />
        <Route path="/contact" element={
           <Suspense fallback={
            <div className='min-h-screen bg-black text-white flex items-center justify-center'>
              Loading...</div>}>
            <LazyContact />
          </Suspense>
        } />
        <Route path="/newsletter" element={
          <Suspense fallback={
            <div className='min-h-screen bg-black text-white flex items-center justify-center'>
              Loading...</div>}>
            <LazyNewsletter />
          </Suspense>
        } />
        <Route path="/services" element={
           <Suspense fallback={
            <div className='min-h-screen bg-black text-white flex items-center justify-center'>
              Loading...</div>}>
            <LazyServices />
          </Suspense>
        } />
        <Route path="/events" element={
          <Suspense fallback={
            <div className='min-h-screen bg-black text-white flex items-center justify-center'>
              Loading...</div>}>
            <LazyEventHosting />
          </Suspense>
        } />
        <Route path="/marketing" element={
           <Suspense fallback={
            <div className='min-h-screen bg-black text-white flex items-center justify-center'>
              Loading...</div>}>
            <LazyMarketing />
          </Suspense>
        } />
        <Route path="/content" element={
           <Suspense fallback={
            <div className='min-h-screen bg-black text-white flex items-center justify-center'>
              Loading...</div>}>
            <LazyContentCreation />
          </Suspense>
        } />
        <Route path="/media" element={
          <Suspense fallback={
            <div className='min-h-screen bg-black text-white flex items-center justify-center'>
              Loading...</div>}>
            <LazyMediaProduction />
          </Suspense>
        } />
        <Route path="/gallery" element={
          <Suspense fallback={
            <div className='min-h-screen bg-black text-white flex items-center justify-center'>
              Loading...</div>}>
            <LazyGallery />
          </Suspense>
        } />
        <Route path="/backyardrave" element={
          <Suspense fallback={
          <div className='min-h-screen bg-black text-white flex items-center justify-center'>
            Loading...</div>}>
            <LazyBackyardRav />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;
