// material-ui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import { IconCircleCheck } from '@tabler/icons-react';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';

import LayerLeft from 'assets/images/landing/customization-left.png';
import LayerRight from 'assets/images/landing/customization-right.png';

// ==============================|| LANDING - CUSTOMIZE ||============================== //

const CustomizeSection = () => {
    const listSX = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.7rem',
        padding: '10px 0',
        fontSize: '1rem',
        color: 'grey.900',
        svg: { color: 'secondary.main' }
    };

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container justifyContent="space-between" alignItems="center" spacing={{ xs: 1.5, sm: 2.5, md: 3, lg: 5 }}>
                <Grid item xs={12} md={6} sx={{ img: { width: '100%' } }}>
                    <Stack sx={{ width: '75%', mb: 5, mx: 'auto' }}>
                        <CardMedia component="img" image={LayerLeft} alt="Layer" />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2.5}>
                        <Grid item xs={12}>
                            <Typography variant="h5" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}>
                            MegaMailer.io Reputaion Defender
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="text.primary"
                                sx={{
                                    fontSize: '1rem',
                                    zIndex: '99',
                                    width: { xs: '100%', sm: '100%', md: 'calc(100% - 20%)' }
                                }}
                            >
                                This ensures that your delivery rates and inbox placement continually improve over time.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />Detailed report about all emails, their encryption method and recipients.
                            </Typography>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />
                                Simple monitoring of all necessary data.
                            </Typography>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />
                                Configuration takes place without the need for integration.
                            </Typography>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />
                                A feature that will allow you to improve the quality of emails.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2.5} direction={{ xs: 'column-reverse', md: 'row' }}>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2.5}>
                                <Grid item xs={12}>
                                    <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}>
                                    MegaMailer.io Reputaion Defender
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.primary"
                                        sx={{
                                            fontSize: '1rem',
                                            zIndex: '99',
                                            width: { xs: '100%', md: 'calc(100% - 20%)' }
                                        }}
                                    >
                                        MegaMailer.io has a purpose-built solution just for you. High volume senders have unique requirements. We provide a rapidly scalable, on-demand solution tailored to your specific sending needs.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        Outstanding deliverability
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        Over 20 years of email expertise.
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        Dedicated Platform
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        Volume can be scaled quickly.
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />Reputation Defender
                                    </Typography>
                                    <Stack direction="row">
                                        <AnimateButton>
                                            <Button
                                                startIcon={<LayersTwoToneIcon />}
                                                sx={{ boxShadow: 'none', my: 4 }}
                                                variant="contained"
                                                component={Link}
                                                href="https://www.figma.com/file/2u2TmauA6lanVMYiywzS1o/berry-figma-v3.0?node-id=0%3A1"
                                                target="_blank"
                                            >
                                                See Our Plans
                                            </Button>
                                        </AnimateButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ img: { width: '100%' } }}>
                            <Stack sx={{ width: '70%', mx: 'auto' }}>
                                <CardMedia component="img" image={LayerRight} alt="Layer" />
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CustomizeSection;
