import '../Base/Base.scss';

import { useState } from 'react';

function Player({initialname, symbol}) {
  const [playerName, setPlayerName] = useState(initialname);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    // setIsEditing(!isEditing);
    // setIsEditing( isEditing ? false : true );

    // Recommended Practice
    setIsEditing( (editing) => !editing);
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  let editPlayerName = <span className='player-name'>{ playerName }</span>;
  // let ButtonValue = 'Edit';
  if( isEditing ) {
    editPlayerName = <input type='text' value={ playerName } onChange={handleNameChange} required /> ;
    // ButtonValue = 'Save';
  }

  return (
    <li>
      <span className='player'>
        { editPlayerName }
        <span className='player-symbol'>{ symbol }</span>
      </span>
      <button onClick={handleEditClick}>{ isEditing ? 'Save' : 'Edit' }</button>
    </li>
  );
}

export default Player;