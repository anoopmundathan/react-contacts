import React, { Component } from 'react';
import ListContact from './ListContacts';

class App extends Component {

	removeContact = (contact) => {
		this.setState((state) => ({
			contacts: state.contacts.filter(c => c.id !== contact.id)
		}));
	}

	state = {
		contacts: [
		  {
		    "id": "ryan",
		    "name": "Ryan Florence",
		    "email": "ryan@reacttraining.com",
		    "avatarURL": "http://localhost:5001/ryan.jpg"
		  },
		  {
		    "id": "michael",
		    "name": "Michael Jackson",
		    "email": "michael@reacttraining.com",
		    "avatarURL": "http://localhost:5001/michael.jpg"
		  },
		  {
		    "id": "tyler",
		    "name": "Tyler McGinnis",
		    "email": "tyler@reacttraining.com",
		    "avatarURL": "http://localhost:5001/tyler.jpg"
		  }
		]
	}
  render() {
    return (
      <div>
        <ListContact 
        	contacts={this.state.contacts} 
					onDeleteContact={this.removeContact}
        	/>
      </div>
    )
  }
}

export default App;
