import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import { Link as LinkIcon, TrendingUp } from '@material-ui/icons'
import toDate from 'Helpers/toDate'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

const styles = () => ({
  root: {
    width: '100%',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '14px 0'
  },
  icon: {
    paddingRight: 14,
    color: '#d42f10'
  },
  linkIcon: {
    paddingRight: 8,
    color: '#CFEBE7'
  },
  previewImg: {
    width: '100%',
    maxHeight: 160,
    padding: '16px 0',
    objectFit: 'cover'
  },
  cardsList: {
    paddingBottom: 0
  },
  card: {
    marginBottom: 24
  },
  title: {
    lineHeight: '1.5rem'
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const NewsBody = ({ classes, newsData, rowsToDisplay }) => (
  <div className={classes.root}>
    <div className={classes.titleContainer}>
      <TrendingUp className={classes.icon} />
      <Typography variant="h6">
        Trending Crypto News
      </Typography>
    </div>

    <div className={classes.cardsList}>
      {newsData.slice(0, rowsToDisplay).map((article, i) => (
        <Card key={i} className={classes.card}>
          <CardContent>
            <div className={classes.flex}>
              <Typography variant="caption">
                {article.source.name}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {toDate(article.publishedAt)}
              </Typography>
            </div>
            <img
              src={article.urlToImage}
              className={classes.previewImg}
              alt="article preview"
            />
            <Typography variant="h6" className={classes.title} paragraph>
              {article.title}
            </Typography>
            <Typography>
              {article.description}
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href={article.url}
            >
              <LinkIcon className={classes.linkIcon} />
              Continue Reading
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  </div>
)

export default withStyles(styles)(NewsBody)
