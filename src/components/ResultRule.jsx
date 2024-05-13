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

export default ResultRule;
