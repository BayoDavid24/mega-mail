import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';

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

const FeatureSection = () => (
    <Container>
        <Grid container spacing={7.5} justifyContent="center">
            <Grid item xs={20} md={10} sx={{ textAlign: 'center' }}>
                <Grid container spacing={1.5}>
                    <Grid item xs={12}>
                        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
                            Unlock the Full Potential of E-mail Delivery with Our Comprehensive Suite of Services
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                        At MegaMailer.io, our primary objective is to ensure your emails reach subscriber inboxes. Alongside maintaining a pristine IP reputation among ISPs and providing top-tier email sending capabilities, we boast in-house experts ready to address all your inquiries.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={5} sx={{ '&> .MuiGrid-root > div': { height: '100%' } }}>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Simple Adaptation"
                            caption="With just a few simple steps from signing up to your first send, you'll be sending your inaugural email within minutes."
                            image={Offer1}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Multifaceted System"
                            caption="From a few thousand emails per month to billions, MegaMailer.io effortlessly scales to ensure timely and reliable sending."
                            image={Offer2}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Fast Delivery"
                            caption="For over two decades, businesses have relied on our exceptional deliverability rates and reputation among mailbox providers."
                            image={Offer3}
                        />
                    </Grid>
                    {/* <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Improved Scalability"
                            caption="Berry uses scalable technologies and resources to ensure that your admin panel remains efficient and effective as your needs evolve."
                            image={Offer4}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title=" Well-Documented and Supported"
                            caption="With a range of resources including user guides, tutorials, and FAQs to help users understand and effectively use the Berry."
                            image={Offer5}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Performance Centric"
                            caption="Berry is a performance-centric dashboard template that is designed to deliver optimal performance for your admin panel."
                            image={Offer6}
                        />
                    </Grid> */}
                </Grid>
            </Grid>
        </Grid>
    </Container>
);

export default FeatureSection;
