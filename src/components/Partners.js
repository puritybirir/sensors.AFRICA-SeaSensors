import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withStyles } from "@material-ui/core";

import partners from "../assets/ourPartners.jpg";

const styles = {
  partnerParent: {
    width: "auto",
    height: "750px",
    backgroundColor: "#ffffff",
    paddingTop: "112px"
  },
  partnerImage: {
    width: "500px",
    height: "500px",
    display: "inline",
    marginLeft: "20%",
    objectFit: "cover"
  },
  ourPartners: {
    width: "216.8px",
    height: "24px",
    opacity: "0.4",
    fontFamily: "Oswald",
    fontSize: "10px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.65",
    letterSpacing: "6px",
    color: "#023256"
  },
  thankYouText: {
    fontFamily: "Oswald",
    fontSize: "52px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.13",
    letterSpacing: "0.7px",
    color: "#023256"
  },
  seaSensorsText: {
    opacity: "0.6",
    fontFamily: "Montserrat",
    fontSize: "15px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.5",
    letterSpacing: "0.7px",
    textAlign: "justify",
    color: "#023256",
    paddingRight: "122px",
    paddingTop: "35px"
  }
};

function Partners({ classes }) {
  return (
    <Grid container spacing={24} className={classes.partnerParent}>
      <Grid item xs={12} sm={6}>
        <img src={partners} className={classes.partnerImage} alt="" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="caption" className={classes.ourPartners}>
          OUR PARTNERS
        </Typography>
        <Typography variant="h4" className={classes.thankYouText}>
          A big thanks
        </Typography>
        <Typography variant="h4" className={classes.thankYouText}>
          to all our partners.
        </Typography>
        <Typography className={classes.seaSensorsText}>
          The project is headed by marine scientist, Gill Braulik, supported by
          a seed grant from Code for Africa’s innovateAFRICA.fund. The project
          would not be possible without the help of our partners, Jamie
          Macaulay, St. Andrews University, Jason Rubens, Sound Ocean Ltd,
          Tanzania Blast Monitoring Network, Mwambao Coastal Community Network,
          Marine Parks and Reserves Unit, Tanzania Fisheries Research Institute
          (TAFIRI), K15 Photos, africanDRONE and Nukta Africa Ltd. Recorders
          have been deployed and retrieved with the assistance of many,
          specifically: Fish Eagle Lodge, Kasa Divers, Unguja Lodge, Seabreeze
          Marine, Emayani Beach Lodge, Friends of Maziwe, Peter Olivier, Steve
          Attwell, Hannes Potgieter, Royce Yaezenko, and Kerstin Erler.
        </Typography>
      </Grid>
    </Grid>
  );
}

Partners.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Partners);
