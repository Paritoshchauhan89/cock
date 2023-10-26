import React from 'react'
import Navbar from './Header/Navbar'
import Footer from './Footer/Footer'
import {Helmet} from "react-helmet"

const Layout = ({Children ,title,  description, keywords, author}) => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />

                <title>{title}</title>
            </Helmet>
 <Navbar/>   
<main style={{minHeight:"70vh"}}>{Children}</main>


 <Footer/>
    
    
    
    
    </>
  );
};



Layout.defaultProps = {
    title: "Stmconferences",
    description: "Welcome to STM Conferences",
    keywords: "stm, e-conferences, publication,researcher",
    author: "Stm Journals",
  };

export default Layout