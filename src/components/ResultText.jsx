import PropTypes from 'prop-types';

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
