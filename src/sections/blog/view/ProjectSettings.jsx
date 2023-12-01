import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import BasicSettings from '../Basics_settings';
import TYSettings from '../TY_settings';
import SubmissionSettings from '../Submission_settings';
import EmailSettings from '../Email_settings';
import NotificationSettings from '../Notification_setting';
import TranslationSettings from '../Translation_settings';
import TeamSettings from '../Team_settings';
import BlockSettings from '../Block_settings';




export default function BlogView() {
  const scrollToBasics = () => {
    const basicsSection = document.getElementById('basics');
    basicsSection.scrollIntoView({ behavior: 'auto' });
  };

  const scrollToTYPage = () => {
    const tySection = document.getElementById('ty');
    tySection.scrollIntoView({ behavior: 'auto' });
  };

  const scrollToSubmissions = () => {
    const submissionsSection = document.getElementById('submissions');
    submissionsSection.scrollIntoView({ behavior: 'auto' });
  };

  const scrollToEmail = () => {
    const emailSection = document.getElementById('email');
    emailSection.scrollIntoView({ behavior: 'auto' });
  };

  const scrollToNotifications = () => {
    const notificationsSection = document.getElementById('notifications');
    notificationsSection.scrollIntoView({ behavior: 'auto' });
  };

  const scrollToTranslations = () => {
    const translationsSection = document.getElementById('translations');
    translationsSection.scrollIntoView({ behavior: 'auto' });
  };

  const scrollToTeam = () => {
    const teamSection = document.getElementById('team');
    teamSection.scrollIntoView({ behavior: 'auto' });
  };

  const scrollToBlock = () => {
    const blockSection = document.getElementById('block');
    blockSection.scrollIntoView({ behavior: 'auto' });
  };

  return (
    <Container >

      <Box sx={{ m: 2, flexGrow: 1, display: 'flex', flexDirection: 'row', gap: 1 }}>

        <Button onClick={scrollToBasics} variant="outlined" color="primary" >
          Basics
        </Button>

        <Button onClick={scrollToTYPage} variant="outlined" color="primary" >
          Thank You Page
        </Button>

        <Button onClick={scrollToSubmissions} variant="outlined" color="primary" >
          Submissions
        </Button>

        <Button onClick={scrollToEmail} variant="outlined" color="primary" >
          Email
        </Button>

        <Button onClick={scrollToNotifications} variant="outlined" color="primary" >
          Notifications
        </Button>

        <Button onClick={scrollToTranslations} variant="outlined" color="primary" >
          Translations
        </Button>

        <Button onClick={scrollToTeam} variant="outlined" color="primary" >
          Team
        </Button>

        <Button onClick={scrollToBlock} variant="outlined" color="primary" >
          Block
        </Button>

      </Box>

      <Box>

        <div id="basics">
          <BasicSettings />
        </div>

        <div id="ty">
          <TYSettings />
        </div>

        <div id="submissions">
          <SubmissionSettings />
        </div>

        <div id="email">
          <EmailSettings />
        </div>

        <div id="notifications">
          <NotificationSettings />
        </div>

        <div id="translations">
          <TranslationSettings />
        </div>

        <div id="team">
          <TeamSettings />
        </div>

        <div id="block">
          <BlockSettings />
        </div>

        <div>
          <Button >Delete Project</Button>
        </div>

      </Box>

    </Container>
  );
}





