import React from 'react';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import Resume from './Resume.js';


const Page = ({currentPage}) => {
    const renderPage = (page) => {
      switch (page) {
        case 'portfolio':
          return <Portfolio />;
        case 'contact':
          return <Contact />;
        case 'resume':
          return <Resume />;
        default:
          return <About />;
      }
    }
    return <div>{renderPage (currentPage)}</div>;
}

export default Page