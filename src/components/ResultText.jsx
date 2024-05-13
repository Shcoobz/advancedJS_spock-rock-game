import PropTypes from 'prop-types';

/**
 * Functional component for displaying the result text in the game.
 * This component renders a text message inside an H3 element, which indicates the outcome of a game round (win, lose, or tie).
 * @param {Object} props - Component props.
 * @param {string} props.text - Text to display as the game result.
 * @returns {React.Component} A styled H3 element containing the result text.
 */
function ResultText({ text }) {
  return (
    <div className='result-container'>
      <h3 className='result-text' id='resultText'>
        {text}
      </h3>
    </div>
  );
}

ResultText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ResultText;
