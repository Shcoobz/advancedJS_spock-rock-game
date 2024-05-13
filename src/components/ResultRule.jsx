import PropTypes from 'prop-types';

/**
 * Functional component for displaying the game rule that determined the result of a round.
 * This component uses the dangerouslySetInnerHTML property to render potentially HTML-formatted text, which allows
 * for rich text representations of game rules.
 * @param {Object} props - Component props.
 * @param {string} props.rule - HTML-formatted string describing the rule that decided the game round outcome.
 * @returns {React.Component} A styled H5 element containing the rule text, potentially with HTML formatting.
 */
function ResultRule({ rule }) {
  return (
    <div className='rule-container'>
      <h5
        className='result-rule'
        id='resultRuleText'
        dangerouslySetInnerHTML={{ __html: rule }}></h5>
    </div>
  );
}

ResultRule.propTypes = {
  rule: PropTypes.string.isRequired,
};

export default ResultRule;
