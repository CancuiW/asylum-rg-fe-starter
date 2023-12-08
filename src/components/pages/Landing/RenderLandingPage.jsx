import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
// import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
// import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
// import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';

import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();
  const imagesData = {
    'Search Grant Rates By Office': {
      imgURL: GrantRatesByOfficeImg,
      divClass: 'grant-rates-by-office-graph-container',
      imgClass: 'gr-office-img',
    },
    'Search Grant Rates By Nationality': {
      imgURL: GrantRatesByNationalityImg,
      divClass: 'grant-rates-by-nationality-container',
      imgClass: 'gr-nationality-img',
    },
    'Search Grant Rates Over Time': {
      imgURL: GrantRatesOverTimeImg,
      divClass: 'grant-rates-over-time-container',
      imgClass: 'gr-overtime-img',
    },
  };
  // Object.entries:help to change the obj to an array
  const imageElements = Object.entries(imagesData).map(([title, data]) => (
    <div key={title} className={data.divClass}>
      <img src={data.imgURL} alt={title} className={data.imgClass} />
      <p>{title}</p>
    </div>
  ));
  const differData = {
    '36%': {
      content:
        'By the end of the Trump administration, the average asylum office grant rate had fallen 36 percent from an average of 44 percent in fiscal year 2016 to 28 percent in fisical  year 2020.',
      divClass: 'first-data-point-container',
    },
    '5%': {
      content:
        'The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.',
      divClass: 'second-data-point-container',
    },
    '6x Lower': {
      content:
        "Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was six times lower than the San Francisco asylum office.",
      divClass: 'third-data-point-container',
    },
  };

  const differElements = Object.entries(differData).map(([title, data]) => (
    <div key={title} className={data.divClass}>
      <h2>{title}</h2>
      <h3>{data.content}</h3>
    </div>
  ));

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      {/* <div className="graphs-section"> */}
      <div className="graphs-section">{imageElements}</div>
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        {/* this csv file is a downloadable file */}
        <a href="https://humanrightsfirst.org/wp-content/uploads/2022/10/COW2021001887-I589Data.csv">
          <div className="read-more-btn">
            <Button style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}>
              Download the Data
            </Button>
          </div>
        </a>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>

      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        {/* <div className="bottom-section">*/}
        <div className="bottom-section">
          <h1>Systemic Disparity Insights</h1>
          <div className="data-container">{differElements}</div>
          <a
            href="https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="read-more-btn">
              <Button
                type="default"
                style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
              >
                Read More
              </Button>
            </div>
          </a>
          <p onClick={() => scrollToTop()} className="back-to-top">
            Back To Top ^
          </p>
        </div>
      </div>
    </div>
  );
}
export default RenderLandingPage;
