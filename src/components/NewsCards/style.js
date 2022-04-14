
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '50vh',
        borderRadius: '21px',

        color: 'black',
        padding: '10',
        // background: 'linear-gradient(to right bottom,#e6e600,#24f7f7)',
        // background: 'linear-gradient(to right, #e6e6e6,white)',
        // background: 'linear-gradient(to right bottom,grey,white)',


    },
    infoCard: {
        display: 'flex', flexDirection: 'column', textAlign: 'center',
    },
    container: {
        padding: '3% 3% 5% 5%', width: '100%', margin: 5,
    },
});