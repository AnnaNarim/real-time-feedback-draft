import {createMuiTheme} from '@material-ui/core/styles';


export function getTheme() {
    return createMuiTheme({
        palette : {
            primary : {
                main : '#008DA0'
            }
        }
    })
};
