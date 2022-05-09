import React from 'react';
import './style.css';
import Footer from '../../components/footer/index.js';
import Americanstandard from '../../images/americanstandard.png'
import Classiccarvalue from '../../images/classiccarvalue.png'
import Cmyskills from '../../images/cmyskills.png'
import Thompsoncreek from '../../images/thompsoncreek.png'

function Clients() {
    return (
        <>
          <div className="col s12 l9 no-pad">
            <div className="App">
              <div className="App-header">
    
                <div className="container">
    
                  <div className="row">
                    <div className="col s12">
                      <h3 className="center color1">Clients</h3>
                      <p id="client-subtitle">Below are some examples of my agency work with Great Big Digital.</p>
                    </div>
                  </div>
    
                  <div className="row">
                    <div className="col s12 l6">
                      <div className="bard">
                        <div className="bard-image">
                          <img src={Classiccarvalue} />
                          <span class="bard-title">Classic Car Value</span>
                        </div>
                        <div className="bard-content">
                          <p>
                            Built with MEVN stack, this tool provides price estimates for vintage vehicles based on multiple data sources. These data sources feature divergent syntax and schema. And so in addition to 
                            building and deploying the UI, API, and database, I also devised a mapping system that translates all data sources into a unified syntax, so that the user can access all data 
                            in a few simple steps.
                          </p>
                          <br />
                          <p><span className="bold">Main Tech:</span> Vue, SQL, node, Express, ES6, HTML5, CSS3, AWS</p>
                        </div>
                        <div className="bard-action">
                          <a className="btn-flat" href="https://classiccarvalue.com/" target="_blank">Example</a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col s12 l6">
                      <div className="bard">
                        <div className="bard-image">
                          <img src={Thompsoncreek} />
                          <span class="bard-title">Thompson Creek</span>
                        </div>
                        <div className="bard-content">
                          <p>
                            For this Wordpress client, I built multiple interactive components using PHP, ES6, HTML5, and CSS3. These components can be accessed in the Wordpress
                            Admin dashboard to create custom product and info displays. Because they are built for re-usability, they can feature 1-99+ items while maintaining 
                            mobile-responsiveness and cross-browser compatibility.  
                          </p>
                          <br />
                          <p><span className="bold">Main Tech: </span> WordPress, PHP, ES6, HTML5, CSS3</p>
                        </div>
                        <div className="bard-action">
                          <a className="btn-flat" href="https://www.thompsoncreek.com/" target="_blank">Example 1</a>
                          <a className="btn-flat" href="https://www.thompsoncreek.com/windows/" target="_blank">Example 2</a>
                        </div>
                      </div>
                    </div>
    
                  </div>
    
                  <div className="row">
                    <div className="col s12 l6">
                      <div className="bard">
                        <div className="bard-image">
                          <img src={Americanstandard} />
                          <span class="bard-title">American Standard</span>
                        </div>
                        <div className="bard-content">
                          <p>
                            I built multiple templates and pages for this client using PHP, ES6, HTML5, and SASS. No plugins were used for UI/UX purposes. All interactive components (i.e. sliders) were 
                            coded from scratch.  
                          </p>
                          <br />
                          <p><span className="bold">Main Tech:</span> Wordpress, PHP, ES6, Bootstrap, HTML5, SASS</p>
                          <br />
                        </div>
                        <div className="bard-action">
                          <a className="btn-flat" href="https://americanstandardshowers.com/inspiration/" target="_blank">Example 1</a>
                          <a className="btn-flat" href="https://americanstandardshowers.com/envisionmybath/" target="_blank">Example 2</a>
                        </div>
                      </div>
                    </div>
    
                    <div className="col s12 l6">
                      <div className="bard">
                        <div className="bard-image">
                          <img src={Cmyskills} />
                          <span class="bard-title">CmySkills</span>
                        </div>
                        <div className="bard-content">
                          <p>
                            I built multiple templates and pages for this site primarily using PHP and ES6. I also built reusable components, including the navbar and footer. 
                            All interactive components were coded from scratch. 
                          </p>
                          <br />
                          <p><span className="bold">Main Tech:</span> Wordpress, PHP, ES6, Bootstrap, HTML5, SASS</p>
                        </div>
                        <div className="bard-action">
                          <a className="btn-flat" href="https://cmyskills.com/" target="_blank">Example 1</a>
                          <a className="btn-flat" href="https://cmyskills.com/contact/" target="_blank">Example 2</a>
                        </div>
                      </div>
                    </div>
    
                  </div>
    
                </div>
    
                <div className="container">    
                  <Footer />
                </div>
                
              </div>
            </div>
          </div>
    
        </>
  )
};

export default Clients;