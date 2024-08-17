import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import { ThemeMode } from 'config';

// assets
import Offer1 from 'assets/images/landing/offer/offer-1.png';
import Offer2 from 'assets/images/landing/offer/offer-2.png';
import Offer3 from 'assets/images/landing/offer/offer-3.png';
import Offer4 from 'assets/images/landing/offer/offer-4.png';
import Offer5 from 'assets/images/landing/offer/offer-5.png';
import Offer6 from 'assets/images/landing/offer/offer-6.png';

const OfferCard = ({ title, caption, image }) => {
    const theme = useTheme();
    const AvaterSx = { bgcolor: 'transparent', color: 'secondary.main', width: 56, height: 56 };

    return (
        <FadeInWhenVisible>
            <SubCard
                sx={{
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.800' : 'grey.100',
                    borderColor: 'divider',
                    '&:hover': { boxShadow: 'none' },
                    height: '100%'
                }}
            >
                <Stack spacing={4}>
                    <Avatar variant="rounded" sx={AvaterSx}>
                        <CardMedia component="img" src={image} alt="Beautiful User Interface" />
                    </Avatar>
                    <Stack spacing={2}>
                        <Typography variant="h3" sx={{ fontWeight: 500 }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                            {caption}
                        </Typography>
                    </Stack>
                </Stack>
            </SubCard>
        </FadeInWhenVisible>
    );
};

OfferCard.propTypes = {
    title: PropTypes.string,
    caption: PropTypes.string,
    image: PropTypes.string
};
// =============================|| LANDING - FEATURE PAGE ||============================= //

const RequirementSection = () => (
    <Container>
        <Grid container spacing={7.5} justifyContent="center">
            <Grid item xs={20} md={10} sx={{ textAlign: 'center' }}>
                <Grid container spacing={1.5}>
                    <Grid item xs={12}>
                        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
                            Utilize MegaMailer.io for All Your E-mail Sending Requirements 
                        </Typography>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                        At MegaMailer.io, our primary objective is to ensure your emails reach subscriber inboxes. Alongside maintaining a pristine IP reputation among ISPs and providing top-tier email sending capabilities, we boast in-house experts ready to address all your inquiries.
                        </Typography>
                    </Grid> */}
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }} >
                <Grid container justifyContent="center" spacing={5} sx={{ '&> .MuiGrid-root > div': { height: '100%' } }}>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Notifications"
                            caption="Send follow-up emails aligned with web or mobile service notifications seamlessly."
                            image={Offer1}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Registration E-mails"
                            caption="Boost sign-ups by minimizing opt-in confirmation delays, thus enhancing onboarding metrics."
                            image={Offer2}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Authentication E-mails"
                            caption="Ensure user safety by delivering authentication emails promptly to their inboxes."
                            image={Offer3}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Order Confirmations"
                            caption="Enhance brand value and credibility by delivering order and billing details promptly and reliably."
                            image={Offer4}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Status Updates"
                            caption="Re-engage users by delivering timely status updates on their account and product usage."
                            image={Offer5}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Policy Change E-mails"
                            caption="Guarantee that critical policy change information emails reach your users promptly."
                            image={Offer6}
                        />
                    </Grid> 
                </Grid>
                <Grid>
                     .
                </Grid>
                <Grid>
                        <Box>
                        <Button
                                component={Link}
                                href="https://links.codedthemes.com/hsqll"
                                disableElevation
                                variant="contained"
                                color="secondary"
                            >
                                Try it for free
                            </Button>
                        </Box>
                </Grid>
            </Grid>
        </Grid>
    </Container>
);

export default RequirementSection;
