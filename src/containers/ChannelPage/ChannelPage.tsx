import React from "react";
import { makeStyles } from "@material-ui/core";

import urlParser from "utils/urlParser";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "70px",
    },
}));

const ChannelPage: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const searchedChannel = urlParser("c", "");
    console.log(searchedChannel);

    return (
        <div className={classes.root}>
            <div>Channel Page</div>
        </div>
    );
};

export default ChannelPage;
