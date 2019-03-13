import React from 'react'
import { Card, CardContent, Typography, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { InfoOutlined } from '@material-ui/icons'
import ExtLink from 'components/Common/ExtLink'

const styles = {
  root: {
    width: '100%',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '14px 0',
  },
  icon: {
    color: '#048dd2',
    paddingRight: 10,
  },
  link: {
    color: '#FFFFFF',
  },
}

const About = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.titleContainer}>
      <InfoOutlined className={classes.icon} />
      <Typography variant="h6">About</Typography>
    </div>

    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Mini-Crypto
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Version alpha-0.1
        </Typography>
        <ExtLink href="https://github.com/nTamura/mini-crypto" paragraph>
          Github Repo
        </ExtLink>

        <Typography>Material UI Library</Typography>
        <ExtLink url="https://material-ui.com/" paragraph>
          Material UI
        </ExtLink>

        <Typography>Cryptocoins Market API</Typography>
        <ExtLink url="https://coinmarketcap.com/" paragraph>
          Coinmarketcap
        </ExtLink>

        <Typography>Cryptocoins News API</Typography>
        <ExtLink url="https://newsapi.org/" paragraph>
          NewsAPI
        </ExtLink>

        <Typography>Cryptocoins Icons Repository</Typography>
        <ExtLink url="https://github.com/allienworks/cryptocoins" gutterBottom>
          Cryptocoins Icons
        </ExtLink>
      </CardContent>
    </Card>
  </div>
)
export default withStyles(styles)(About)
