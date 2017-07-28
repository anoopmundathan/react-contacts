import React, { Component } from 'react';
import ListContact from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom';

class App extends Component {

	state = {
		contacts: []
	}

	removeContact = (contact) => {
		this.setState((state) => ({
			contacts: state.contacts.filter(c => c.id !== contact.id)
		}));

		ContactsAPI.remove(contact);
	}

	componentDidMount() {
		ContactsAPI.getAll().then((contacts) => {
			this.setState({ contacts });
		});
	}


  render() {
    return (
      <div>
				<Route exact path='/' render={() => (
					<ListContact 
						contacts={this.state.contacts}
						onDeleteContact={this.removeContact} />
					)} 
				/>
				<Route path='/contact' component={ CreateContact } />
      </div>
    )
  }
}

export default App;
