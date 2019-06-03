import React from 'react';
import PropTypes from 'prop-types';

import SliderCarousel from '../components/IndexHeader/SliderCarousel';
import Navigation from '../components/Navigation';
import Blasts from '../components/Blasts';
import TopStory from '../components/TopStory';
import BlastFishing from '../components/TextSection';
import Video from '../components/Video';
import HowItWorks from '../components/TextSection/HowItWorks';
import Scuba from '../components/Scuba';
import More from '../components/More';
import Stories from '../components/Stories';
import Partners from '../components/Partners';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/Footer';
import { Page } from '../components/core';

function Index({ location }) {
  return (
    <Page>
      <Navigation />
      <SliderCarousel />
      <Blasts />
      <TopStory />
      <BlastFishing />
      <Video origin={location.origin} />
      <HowItWorks />
      <Scuba />
      <More />
      <Stories />
      <Partners />
      <GetInvolved />
      <Footer />
    </Page>
  );
}

Index.propTypes = {
  location: PropTypes.shape().isRequired
};

export default Index;
