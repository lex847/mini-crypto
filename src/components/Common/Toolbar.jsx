import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Menu, MenuItem, InputBase, Typography } from '@material-ui/core'
import { AddCircleOutline, ArrowDropDown, Search } from '@material-ui/icons'

const options = ['USD', 'CAD']

const Toolbar = ({
  classes,
  match,
  currency,
  anchorEl,
  handleClick,
  handleSearch,
  handleClose,
  selectCurrency,
}) => (
  <div className={classes.root}>
    <div className={classes.searchBar}>
      {match.path === '/charts' && (
        <>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            onChange={handleSearch}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </>
      )}
      {match.path === '/portfolio' && (
        <>
          <div className={classes.searchIcon}>
            <AddCircleOutline />
          </div>
          <InputBase
            // onChange={handleSearch}
            placeholder="Quantity"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
          <InputBase
            // onChange={handleSearch}
            placeholder="Coin"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </>
      )}
    </div>

    <Typography
      aria-owns={anchorEl ? 'menu' : undefined}
      aria-haspopup="true"
      onClick={handleClick}
      className={classes.currencyDropdown}
    >
      {currency.toUpperCase()}
      <ArrowDropDown />
    </Typography>
    <Menu
      id="menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {options.map(option => (
        <MenuItem
          key={option}
          selected={option === currency}
          value={option}
          onClick={selectCurrency}
        >
          {option.toUpperCase()}
        </MenuItem>
      ))}
    </Menu>
  </div>
)

const styles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currencyDropdown: {
    display: 'flex',
    fontSize: '1rem',
  },
  searchBar: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    height: 53,
  },
  inputRoot: {
    width: '80%',
  },
  searchIcon: {
    display: 'flex',
    color: '#FFF',
    fontSize: '1.4rem',
    paddingRight: 16,
  },
})

export default withRouter(withStyles(styles)(Toolbar))
