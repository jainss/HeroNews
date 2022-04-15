import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {
        textAlign: 'center',
        position: 'fixed',
        left: 0,
        bottom: 0,
        color: 'black',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '120px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    link: {
        textDecoration: 'none',
        color: 'rgba(21, 101, 192)',
    },
    image: {
        marginLeft: 20,
    },
    card: {
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        padding: '3%',
        borderRadius: 10,
        // color: 'black',
        // backgroundColor: 'rgba(21, 101, 192)',
        // background: 'linear-gradient(white, grey, white,#263a3a)',
        margin: '0 12px',
        textAlign: 'center',
        height: '25vmin',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            textAlign: 'center',
            width: '100%',
            height: 'initial',
            '&:nth-of-type(1)': {
                marginBottom: '12px',
            },
        },
    },
    infoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        color: 'black',

    },
    logoContainer: {
        padding: '5 5%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '41px',
        color: 'Black',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            textAlign: 'center',
        },
        // background: 'black',

    },
    center: {
        textAlign: 'center',
        fontSize: '31px',
        background: 'black',
        color: '#80ffff',
        // background: 'linear-gradient(white, grey, white,#263a3a)',   
    },
    alanLogo: {
        height: '27vmin',
        borderRadius: '15%',
        padding: '0 5%',
        margin: '3% 0',
        [theme.breakpoints.down('sm')]: {
            height: '35vmin',
        },
        background: 'black',
    },
}));