import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import { Banner } from './../components/Banner/Banner';
import { Image } from './../components/Image/Image';
import colors from '../colors';
import Arrow from '../components/Arrow/Arrow';
import { BodyText } from '../components/BodyText/BodyText';
import { ContentLiftup } from '../components/ContentLiftup/ContentLiftup';
import Element from '../components/Element/Element';
import Layout from '../components/layout';
import { PartBanner } from '../components/PartBanner/PartBanner';
import SEO from '../components/seo';
import { SubHeader } from '../components/SubHeader/SubHeader';
import { TripleBorder } from '../components/TripleBorder/TripleBorder';
import licenceIcon from '../images/by-nc-sa.eu.png';
import calendarIcon from '../images/calendar-60.svg';
import cc from '../images/cc.svg';
import yliopistoLogo from '../images/hgin_yliopisto.png';
import houstonLogo from '../images/houston_logo.png';
import announcement from '../images/ic_announcement_48px.svg';
import starIcon from '../images/ic_stars_48px.svg';
import timerIcon from '../images/ic_timer_48px.svg';
import landingImage from '../images/Landing.png';
import news from '../images/noun_news_1248039.svg';
import telegramIcon from '../images/telegram-logo-png-open-2000.png';

const thingsToKnow = [
  { icon: timerIcon, text: '5-20 tuntia / osaa' },
  { icon: calendarIcon, text: 'Deadline 15.12.2018' },
  { icon: starIcon, text: 'Get started' },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

    <StaticQuery
      query={graphql`
        query {
          allMainJson {
            edges {
              node {
                id
                mainTitle
                intro
                telegram
                current
                notice
                licence
                university
                houston
                contacts
                licenced
              }
            }
          }
        }
      `}
      render={data => {
        const {
          mainTitle,
          intro,
          telegram,
          current,
          notice,
          licence,
          university,
          houston,
          contacts,
          licenced,
        } = data.allMainJson.edges[0].node;

        return (
          <div>
            <div className="container spacing--after">
              <div className="col-7">
                <SubHeader
                  className="col-10 spacing--large"
                  style={{ fontSize: '3.444rem' }}
                  text={mainTitle}
                  headingLevel="h1"
                />

                <Arrow
                  className="col-3 arrow__container--with-link"
                  bold
                  thickBorder
                  link="/about"
                  content={[
                    { backgroundColor: colors['main'], text: 'Aloita kurssi' },
                  ]}
                />

                <BodyText
                  className="col-7 spacing--after-small "
                  text={intro}
                />
              </div>

              <Element flex spaceAround className="col-3">
                <img
                  className="col-7"
                  style={{ marginTop: 'auto', marginBottom: 0 }}
                  alt="Stacked cubes with React logo and JavaScript text"
                  src={landingImage}
                />
              </Element>
            </div>

            <Banner>
              <Element flex spaceBetween className="container">
                <BodyText
                  className="col-10 centered"
                  heading={{ title: 'Things to Know', level: 'h2' }}
                  headingFontSize="1.777rem"
                />

                <Element className="col-8 push-right-1" flex spaceAround>
                  {thingsToKnow.map(item => {
                    return (
                      <Element
                        key={item.text}
                        centered
                        flex
                        dirColumn
                        className="col-1"
                      >
                        <Image contain fullWidth src={item.icon} />
                        <BodyText
                          centered
                          style={{ paddingTop: '1.666rem' }}
                          text={item.text}
                        />
                      </Element>
                    );
                  })}
                </Element>
              </Element>
            </Banner>

            <Element className="container spacing--large spacing--after">
              <Element className="push-right-1 push-left-1" spaceBetween flex>
                <Element flex horizontalHalf flexStart>
                  <Element
                    flex
                    spaceBetween
                    autoBottomMargin
                    className="col-10"
                  >
                    <Image contain small src={news} />

                    <BodyText
                      className="col-7"
                      heading={{ title: 'Ajankohtaista', level: 'h3' }}
                    />
                  </Element>

                  <BodyText className="spacing--small" text={current} />

                  <Element flex spaceBetween className="col-10">
                    <Image contain extraSmall src={telegramIcon} />

                    <BodyText className="col-8" text={telegram} />
                  </Element>

                  <Element flex spaceBetween className="col-10 spacing--small">
                    <Image contain extraSmall src={announcement} />

                    <BodyText className="col-8" text={notice} />
                  </Element>
                </Element>

                <Element flex horizontalHalf flexStart>
                  <Element
                    flex
                    spaceBetween
                    autoBottomMargin
                    className="col-10"
                  >
                    <Image contain small src={cc} />

                    <BodyText
                      className="col-7"
                      heading={{
                        title: 'Kurssimateriaalin tekijä ja lisenssi',
                        level: 'h3',
                      }}
                    />
                  </Element>

                  <BodyText className="spacing--small" text={licence} />
                </Element>
              </Element>
            </Element>

            <PartBanner />

            <Element className="container spacing--after" flex>
              <SubHeader
                className="col-10 centered"
                text="Company logos"
                headingLevel="h2"
                headingFontSize="3.444rem"
              />

              <Element flex spaceBetween className="col-8 push-right-1">
                <ContentLiftup
                  small
                  image={{
                    src: yliopistoLogo,
                    alt: 'Helsingin yliopisto logo',
                  }}
                  className="col-2"
                />

                <ContentLiftup
                  small
                  image={{ src: houstonLogo, alt: 'Houston Inc. logo' }}
                  className="col-2 push-right-2"
                />

                <ContentLiftup
                  small
                  image={{
                    src: yliopistoLogo,
                    alt: 'Helsingin yliopisto logo',
                  }}
                  className="col-2 push-right-2"
                />

                <ContentLiftup
                  small
                  image={{ src: houstonLogo, alt: 'Houston Inc. logo' }}
                  className="col-2"
                />

                <ContentLiftup
                  small
                  image={{
                    src: yliopistoLogo,
                    alt: 'Helsingin yliopisto logo',
                  }}
                  className="col-2"
                />

                <ContentLiftup
                  small
                  image={{ src: houstonLogo, alt: 'Houston Inc. logo' }}
                  className="col-2"
                />
              </Element>
            </Element>

            <Element
              flex
              spaceBetween
              className="container col-10 spacing--after"
            >
              <TripleBorder
                largeMargin
                backgroundColor={colors['main']}
                className="col-10"
              >
                <Element flex spaceAround className="col-10 spacing--small">
                  <div className="col-3">
                    <Image contain src={yliopistoLogo} alt="" />

                    <BodyText text={university} />
                  </div>

                  <div className="col-3">
                    <Image contain src={houstonLogo} alt="" />

                    <BodyText text={houston} />
                  </div>
                </Element>

                <Element
                  flex
                  spaceAround
                  className="spacing--small spacing--after col-10"
                >
                  <div className="col-3">
                    <BodyText
                      noPadding
                      style={{ paddingTop: '2.111rem' }}
                      text={contacts}
                    />
                  </div>
                  <div className="col-3">
                    <Image contain src={licenceIcon} alt="" />

                    <BodyText text={licenced} />
                  </div>
                </Element>
              </TripleBorder>
            </Element>
          </div>
        );
      }}
    />
  </Layout>
);

export default IndexPage;