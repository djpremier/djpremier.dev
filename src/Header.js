import React from 'react';
import avatar from './img/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withStyles } from "@material-ui/core/styles"
import {
  Button,
  Typography,
  Grid,
  Avatar,
  List,
  ListItem
} from "@material-ui/core"
import Box from '@material-ui/core/Box';

const styles = () => ({
  header: {
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    borderTop: "10px solid #778492",
    boxSizing: "border-box",
    display: "block",
    padding: "30px 0",
    "& > div": {
      display: "inline-block"
    }
  },
  profileImage: {
    margin: "0 auto",
    marginRight: "30px",
    width: "200px",
    height: "200px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  listInline: {
    "& > li": {
      width: "auto",
      display: "inline-block",
      paddingRight: "5px",
      paddingLeft: "5px"
    }
  }
})

const Header = ({ classes }) => (
  <Grid container className={classes.header}>
      <Avatar className={classes.profileImage} src={avatar} alt="Djpremier" />
      <div className="profile-content">
        <Typography variant="h4" color="primary">
          <Box fontWeight="fontWeightBold" mt={6} mb={1}>
            Djpremier
          </Box>
        </Typography>
        <Button color="secondary">
          Full Stack Overflow
        </Button>
        <List className={[classes.social, classes.listInline]}>
          <ListItem>
            <Avatar aria-label="GitHub" className={classes.avatar}>
              <Button
                color="primary"
                href="https://github.com/djpremier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github-alt"]} size="lg" />
              </Button>
            </Avatar>
          </ListItem>
          <ListItem>
            <Avatar aria-label="Telegram" className={classes.avatar}>
              <Button
                color="primary"
                href="https://t.me/Djpremier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "telegram-plane"]} size="lg" />
              </Button>
            </Avatar>
          </ListItem>
          <ListItem>
            <Avatar aria-label="E-mail" className={classes.avatar}>
              <Button
                color="primary"
                href="mailto:contact@djpremier.dev?Subject=Hello%20Djpremier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon="envelope" size="lg" />
              </Button>
            </Avatar>
          </ListItem>
        </List>
      </div>
  </Grid>
)

export default withStyles(styles)(Header);
