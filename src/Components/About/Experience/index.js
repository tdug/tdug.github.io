import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { experience } from "../../../data/experience";

import {
  Grid,
  Paper,
  Typography,
  Divider,
  Link,
  IconButton,
} from "@material-ui/core";

import {
  Public as PublicIcon
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  work: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1)
  },
  company: {
    textAlign: 'center'
  },
  services: {
    padding: theme.spacing(2),
    textAlign: 'center'
  }
}));

export default function Experience() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3">Work</Typography>
      {experience.work.map(w => (
        <Paper key={w.company.name} className={classes.work}>
          <Grid container>
            <Grid item xs={12} sm={3} className={classes.company}>
              <Typography variant="h5">
                {w.company.name}
              </Typography>
              <IconButton
                href={w.company.url}
                target="_blank"
                renderAs={Link}
              >
                <PublicIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="h5">{w.title}</Typography>
              <br />
              <Typography>{w.description}</Typography>
              <br />
              <Divider />
              <Typography variant="small">Languages: {w.tech.languages.join(' | ')}</Typography>
              <br />
              <Typography variant="small">Frameworks: {w.tech.frameworks.join(' | ')}</Typography>
              <br />
              <Typography variant="small">Storage: {w.tech.storage.join(' | ')}</Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <Paper className={classes.services}>
        <Typography variant="h5">Contracting Services Also Available</Typography>
      </Paper>
    </>
  )
}
