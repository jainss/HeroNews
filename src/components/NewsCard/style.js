import { makeStyles } from "@material-ui/core/node_modules/@material-ui/styles";

export default makeStyles({
    media: {
        height: 250,
    },
    border: {
        border: 'solid',
        borderRadius: '30',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        borderRadius: '30px',
        margin: '4px',
        border: '3px solid white',
        flexDirection: 'column',
        background: 'linear-gradient(to right, #faf738,#24f7f7)',
        justifyContent: 'space-between',
        // borderBottom: '21px solid #00ffff ',
    },
    activeCard: {
        borderBottom: '10px black #80ffffs',
    },
    grid: {
        display: 'flex',
    },
    details: {

        display: 'flex',
        justifyContent: 'space-between',
        margin: '5px',
    },
    title: {
        padding: '10px 15px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
});