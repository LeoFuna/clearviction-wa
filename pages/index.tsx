import {
  Button, ButtonGroup, Grid, Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiMarkdown from 'mui-markdown';
import Script from 'next/script';
import React from 'react';

import externalLinks from '../components/functional/ExternalLinks.tsx';
import MailchimpForm from '../components/functional/MailchimpForm.tsx';
import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import GridItemCard from '../components/layout/GridItem.tsx';
import HeroBanner from '../components/layout/HeroBanner.tsx';
import ImageContainer from '../components/layout/ImageContainer.tsx';
import PaperSection from '../components/layout/PaperSection.tsx';
import ResearchBanner from '../components/layout/ResearchBanner.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/home.ts';

export default function Home() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  externalLinks();

  return (
    <>
      <IndividualPageHead
        title="Clearing Criminal Records in Washington State"
        metaContent="Washington Law allows for vacation of select criminal records. Clearviction's free tools help individuals assess their eligibility for a fresh start."
      />
      {/* Start Google Tag Manager */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=GTM-5SPM3GH" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GTM-5SPM3GH');
        `}
      </Script>
      {/* End Google Tag Manager */}

      <main>
        <HeroBanner {...content.heroBanner} />
        <SectionContainer>
          <ButtonGroup
            variant="text"
            fullWidth
            orientation={matchesXS ? 'vertical' : 'horizontal'}
          >
            {content.sectionNavs.map((nav) => (
              <Button key={nav.href} href={nav.href}>
                {nav.label}
              </Button>
            ))}
          </ButtonGroup>
        </SectionContainer>
        <SectionContainer id={content.ourMission.id}>
          <PaperSection>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                  {content.ourMission.header}
                </Typography>
              </Grid>
              <Grid item sm={12} md={6}>
                <ImageContainer
                  src={content.ourMission.imgsrc as string}
                  alt=""
                  width={406}
                  height={306}
                  style={{ width: '100%' }}
                  useImageDimensions
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mt: '4.375rem',
                    textAlign: {
                      sm: 'center',
                      md: 'left',
                    },
                  }}
                >
                  <MuiMarkdown>{content.ourMission.body}</MuiMarkdown>
                </Typography>

              </Grid>
            </Grid>
          </PaperSection>
        </SectionContainer>

        {content.gridSections.map((section) => (
          <SectionContainer key={section.id} id={section.id}>
            <PaperSection
              title={section.title}
              subtitle={section.subtitle}
              ctaLink={section.ctaLink}
              ctaText={section.ctaText}
            >
              <Grid container spacing={4}>
                {section.items.map((item) => (
                  <GridItemCard
                    key={item.id}
                    xs={12}
                    md={section.items.length % 2 ? 4 : 3}
                    title={item.title}
                    body={item.body}
                    imgsrc={item.imgsrc}
                  />
                ))}
              </Grid>
            </PaperSection>
          </SectionContainer>
        ))}
        <SectionContainer id="faq">
          <PaperSection title="FAQ">
            {content.faqs.map((faq) => (
              <AccordionBuilder key={faq.id} {...faq} />
            ))}
          </PaperSection>
        </SectionContainer>
        <ResearchBanner />
        <MailchimpForm mobileMarginZero />
      </main>
    </>
  );
}
