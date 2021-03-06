import PropTypes from 'prop-types'
import Button from './Button'

import React from 'react'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color="green" text="Add Task"></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string
}


export default Header
