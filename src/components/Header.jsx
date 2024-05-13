import PropTypes from 'prop-types';

/**
 * Functional component for the header of the game interface.
 * This component displays the game title "Rock Paper Scissors Lizard Spock" and includes a reset icon.
 * Clicking the reset icon triggers a function to reset all game states.
 * @param {Object} props - Component props.
 * @param {Function} props.resetAll - Function to reset all game states when the reset icon is clicked.
 * @returns {React.Component} A header element with the game title and a clickable reset icon.
 */
function Header({ resetAll }) {
  return (
    <div className='header'>
      <h1>Rock Paper Scissors Lizard Spock</h1>
      <i className='fas fa-sync-alt reset-icon' title='Reset' onClick={resetAll}></i>
    </div>
  );
}

Header.propTypes = {
  resetAll: PropTypes.func.isRequired,
};

export default Header;
