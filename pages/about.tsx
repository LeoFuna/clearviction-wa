import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MuiMarkdown from "mui-markdown";
import Image from "next/image";

import externalLinks from "../components/externalLinks";
import { Fact } from "../components/Fact";
import HeroBanner from "../components/HeroBanner";
import { PaperSection } from "../components/PaperSection";
import SectionContainer from "../components/SectionContainer";
import aboutContent from "../content/about";

export default function AboutPage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  externalLinks();

  return (
    <>
      <HeroBanner
        heading={aboutContent.aboutPage.hero.header}
        subheading={aboutContent.aboutPage.hero.body}
        imgsrc={aboutContent.aboutPage.hero.imgsrc}
      />
      <SectionContainer>
        <ButtonGroup
          variant="text"
          fullWidth
          orientation={matchesXS ? "vertical" : "horizontal"}
        >
          <Button href="#our-story">Our Story</Button>
          <Button href="#our-team">Our Team</Button>
        </ButtonGroup>
      </SectionContainer>

      <SectionContainer
        id="our-story"
        sx={{ margin: "auto", maxWidth: "772px" }}
        maxWidth={false}
      >
        <Typography variant="h2">
          {aboutContent.aboutPage.ourStory.header}
        </Typography>
        <Typography variant="h3">
          {aboutContent.aboutPage.ourStory.body}
        </Typography>

        <Box>
          <PaperSection title="" sx={{ p: 8, my: 8 }}>
            <Grid container spacing={4}>
              <Typography variant="subtitle1">
                <MuiMarkdown>{aboutContent.aboutPage.body[0]}</MuiMarkdown>
              </Typography>
              <Grid container>
                {aboutContent.aboutPage.facts.map((fact) => (
                  <Grid key={fact.id} item xs={12} sm={4} md={4} lg={4}>
                    <Fact text={fact.text} icon={fact.icon} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Button
                href="/get-started"
                aria-label="to Get Started"
                variant="contained"
                sx={{
                  mt: 4,
                  px: "2em",
                  "&:hover": {
                    color: theme.palette.primary.dark,
                    backgroundColor: "#FFD200",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </PaperSection>
        </Box>
      </SectionContainer>
      <SectionContainer>
        <Box style={{ width: "90%", margin: "0 auto" }}>
          <Grid container>
            <Grid item sm={12} md={6}>
              <Box
                component="img"
                src={aboutContent.aboutPage.ourMission.imgsrc}
                alt=""
                sx={{
                  objectFit: "contain",
                  textAlign: "center",
                }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Typography variant="h4">
                {aboutContent.aboutPage.ourMission.header}
              </Typography>
              <Typography variant="subtitle1">
                <MuiMarkdown>
                  {aboutContent.aboutPage.ourMission.body}
                </MuiMarkdown>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </SectionContainer>
      <SectionContainer id="our-team">
        <Typography variant="h2">
          {aboutContent.aboutPage.ourTeam.title}
        </Typography>
        <Grid container>
          <iframe
            id={aboutContent.aboutPage.ourTeam.id}
            title="our-team"
            src={aboutContent.aboutPage.ourTeam.src}
            width="100%"
            height="1048"
            style={{
              background: "transparent",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />
        </Grid>
      </SectionContainer>
    </>
  );
}
