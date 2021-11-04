import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/HeroLight";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/PortfolioLight";
import Blog from "../../components/blog/BlogLight";
import Contact from "../../components/Contact";
import Social from "../../components/Social";
import AnimatedCursor from "react-animated-cursor";

const menuItem = [
  { icon: "fa-home", menuName: "Inicio" },
  /*   { icon: "fa-user", menuName: "About" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" }, */
  { icon: "fa-comments", menuName: "Topics" },
];

const HomeLight = () => {
  document.body.classList.add("light");

  const [tabIndex, setTabIndex] = useState(0);

  const goToTopics = () => {
    setTabIndex(1);
  };

  return (
    <div className="green">
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="228, 160, 140"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero on={goToTopics}/>
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* Blog Content Starts */}
          <TabPanel className="blog">
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                temas <span>de conversacion</span>
              </h1>
              <span className="title-bg">español</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {/*  Articles Starts  */}
              <div className="row pb-50">
                <Blog />
              </div>
              {/* Articles Ends */}
            </div>
          </TabPanel>
          {/* Blog Content Ends */}
        </div>
      </Tabs>
    </div>
  );
};

export default HomeLight;
