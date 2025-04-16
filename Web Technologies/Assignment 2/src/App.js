//Note that the original website with the same link has changed between Assignment 1 and Assignment 2
//This code follows the pattern of the page made in assignment 1
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import IntroSection from './IntroSection';
import ContentSection from './ContentSection';
import NetworkDemandsSection from './NetworkDemandsSection';
import CollaborationSection from './CollaborationSection';
import Footer from './Footer';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Breadcrumb />
      <IntroSection />
      <ContentSection />
      <NetworkDemandsSection />
      <CollaborationSection />
      <Footer />
    </div>
  );
}

export default App;
