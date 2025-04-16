//Note that the original website with the same link has changed between Assignment 1 and Assignment 2
//This code follows the pattern of the page made in assignment 1
import React from 'react';

function Footer() {
  return (
    <div>
      <>
        <div className="col-6" style={{ marginLeft: '50px' }}>
          <h1>Learn more</h1>
        </div>

        <div className="row">
          <div className="col-3">
            <img
              src="/industrial-metaverse-refrence-thumbnail-1920x1080.jpg"
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
            Topic
          </div>
          <div className="col-3">
            <img
              src="/image06103.png"
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
            Video
          </div>
          <div className="col-3">
            <img
              src="/nokia_industry_blog_lead.jpg"
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
            Blog
          </div>
          <div className="col-3">
            <img
              src="/envisioning-6g-future_0.jpg"
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
            technology
          </div>
        </div>

        <div className="row">
          <div className="col-3" style={{ fontSize: '25px' }}>
            Powering the industrial metaverse
          </div>
          <div className="col-3" style={{ fontSize: '25px' }}>
            Nokia technology vision 2030 in metaverse
          </div>
          <div className="col-3" style={{ fontSize: '25px' }}>
            Let's talk metaverses, plural
          </div>
          <div className="col-3" style={{ fontSize: '25px' }}>
            Envisioning a 6G universe
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <img
              src="/gettyimages-1196947685.jpg"
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
            Technology
          </div>
          <div className="col-3">
            <img
              src="/nokia_ai_analytics.jpg"
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
            Topic
          </div>
          <div className="col-3">
            <img
              src="/nokia-ip-networks_-the-metaverse-will.blog-post-tile-04.jpg"
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
            Blog
          </div>
          <div className="col-3">
            <img
              src="/Networks that_website header_1920 x 550_0.jpg"
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
            Topic
          </div>
        </div>

        <div className="row">
          <div className="col-3" style={{ fontSize: '25px' }}>
            5G-Advanced
          </div>
          <div className="col-3" style={{ fontSize: '25px' }}>
            AI and analytics
          </div>
          <div className="col-3" style={{ fontSize: '25px' }}>
            The metaverse will never be beyond our living rooms without a
            powerful network
          </div>
          <div className="col-3" style={{ fontSize: '25px' }}>
            Envisioning a 6G universe
          </div>
        </div>

        <div className="row">
          <br />
          <br />
          <br />
          <div className="col-12" style={{ color: 'blue' }}>
            <h1>Nokia</h1>
          </div>
        </div>

        <div
          className="row"
          style={{
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'black',
          }}
        >
          <div className="col-3">
            <br />
            <p>Looking for Nokia licensed products support?</p>
            <p>Explore consumer devices</p>
          </div>
          <div className="offset-1 col-2">
            <br />
            <p>
              Careers <br /> Sustainability <br /> Learning at Nokia
            </p>
          </div>
          <div className="offset-1 col-2">
            <br />
            <p>
              Newsroom <br /> Experience centers
            </p>
          </div>
          <div className="offset-1 col-2">
            <br />
            <p>
              Investor relations <br /> Customer Success
            </p>
          </div>
        </div>

        <div
          className="row"
          style={{
            color: 'blue',
            borderBottom: '1px solid',
            borderColor: 'black',
          }}
        >
          <div className="col-1" style={{ marginTop: '50px' }}>
            Contact us
          </div>
          <div className="col-1" style={{ marginTop: '50px' }}>
            Support
          </div>
          <div className="col-2" style={{ marginTop: '50px' }}>
            Extranet access
          </div>
          <div className="offset-5 col-3">
            <button
              style={{
                color: 'blue',
                border: '2px solid blue',
                backgroundColor: 'transparent',
                padding: '10px 20px',
                borderRadius: '5px',
                marginTop: '40px',
              }}
            >
              Subscribe for our latest news
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-2" style={{ marginTop: '50px' }}>
            Nokia all rights reserved
          </div>
          <div className="col-1" style={{ marginTop: '50px' }}>
            Cookies
          </div>
          <div className="col-2" style={{ marginTop: '50px' }}>
            Privacy notice
          </div>
          <div className="col-2" style={{ marginTop: '50px' }}>
            Terms of use
          </div>
          <div className="col-2" style={{ marginTop: '50px' }}>
            Inclusive terminology
          </div>
          <div className="col-2" style={{ marginTop: '50px' }}>
            Modern slavery statement
          </div>
        </div>
      </>
    </div>
  );
}

export default Footer;
