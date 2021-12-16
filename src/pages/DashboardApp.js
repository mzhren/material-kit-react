// material
import { Box, Grid, Container, Typography, styled,useTheme } from '@material-ui/core';
import { keyframes } from "@material-ui/styled-engine";

// components
import Page from '../components/Page';
import {
  AppTasks,
  AppV2exNews,
  AppGlobalSearch,
  AppOrderTimeline,
  AppOfficialAccount,
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------




export default function DashboardApp() {
  const theme = useTheme();

const typing = keyframes`
from { width: 0 }
to { width: 240px }
`;

const blinkcaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: ${theme.palette.primary.main}; }
`;


const TypographyTyping = styled(Typography)`
width:240px;
overflow: hidden; 
border-right: .15em solid ${theme.palette.primary.main}; 
white-space: nowrap; 
margin: 0 auto; 
letter-spacing: .15em; 
text-align:center;
animation: 
  ${typing} 2s steps(50, end),
  ${blinkcaret} .75s step-end infinite;
`;
  return (
    <Page title="StartPage.site | 极客上网第一站">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <TypographyTyping variant="h4" center>攻城狮，欢迎回来！</TypographyTyping>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <AppGlobalSearch />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppV2exNews />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOfficialAccount />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
