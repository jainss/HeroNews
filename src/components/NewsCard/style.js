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
        borderRadius: '30',
        margin: '10px',
        flexDirection: 'column',
        background: 'linear-gradient(to right, #e6e6e6,white)',
        justifyContent: 'space-between',
        borderBottom: '21px solid black',
    },
    activeCard: {
        borderBottom: '10px black #faf738',
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