function Header({ resetAll }) {
  return (
    <div className='header'>
      <h1>Rock Paper Scissors Lizard Spock</h1>
      <i className='fas fa-sync-alt reset-icon' title='Reset' onClick={resetAll}></i>
    </div>
  );
}

export default Header;
