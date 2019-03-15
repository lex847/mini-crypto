import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

const ShowMore = ({ classes, showMore, rowsToDisplay, maxRows }) => (
  <div className={classes.root}>
    {rowsToDisplay >= maxRows ? (
      <Typography variant="button" className={classes.dimmed}>
        no more to show
      </Typography>
    ) : (
      <Button variant="text" className={classes.buttonBase} onClick={showMore}>
        show more
        <ExpandMore className={classes.icon} />
      </Button>
    )}
  </div>
)

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonBase: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dimmed: {
    color: 'rgba(255,255,255,0.2)',
  },
  icon: {
    color: '#FFF',
  },
})

ShowMore.propTypes = {
  classes: PropTypes.object.isRequired,
  showMore: PropTypes.func.isRequired,
  rowsToDisplay: PropTypes.number.isRequired,
  maxRows: PropTypes.number.isRequired,
}

export default withStyles(styles)(ShowMore)
