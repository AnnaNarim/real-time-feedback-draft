import React, {useLayoutEffect, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import QRCode from 'qrcode.react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const QrComponent = (props) => {
    const [classId, setClassId] = useState('');
    const [qrValue, setQrValue] = useState('');
    return (
        <div style={{
            display             : "grid",
            gridTemplateColumns : "1fr 1fr",
            gridGap             : '1em',
            height              : "100%"
        }}>

            <div style={{display : "grid", gridTemplateRows : "1fr 1fr", gridGap : '1em'}}>
                <TextField
                    label="Class ID"
                    value={classId}
                    onChange={(e) => setClassId(e.target.value)}
                />
                <Button
                    style={{margin : "15px 0"}}
                    color='primary'
                    variant="contained"
                    onClick={() => setQrValue(classId)}>
                    Generate QR
                </Button>

                <FullScreenDialog renderQr={(size) => <QRCode value={qrValue} size={size} level={'H'}/>}/>
            </div>

            <div style={{justifySelf : "center", alignSelf : "center"}}>
                <QRCode value={qrValue} level={'H'}/>
            </div>


        </div>
    )
};

export default withRouter(QrComponent);


const useStyles = makeStyles((theme) => ({
    appBar : {
        position : 'relative',
    },
    title  : {
        marginLeft : theme.spacing(2),
        flex       : 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog({renderQr}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [width, height] = useWindowSize();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const size = width / 2;

    return (
        <div>
            <Button variant="outlined" color="primary" style={{width : "100%"}} onClick={handleClickOpen}>
                Open full-screen QR
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>

                <div style={{
                    height       : "100%",
                    width        : "100%",
                    display      : 'grid',
                    alignItems   : "center",
                    justifyItems : "center",
                    margin       : 10
                }}>
                    {renderQr(size / 1.3)}
                </div>
            </Dialog>
        </div>
    );
}
