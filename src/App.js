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

	createContact = (contact) => {
		ContactsAPI.create(contact).then(contact => {
			this.setState(state => ({
				contacts: state.contacts.concat([contact])
			}));
		})
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
				<Route path='/contact' render={({ history }) => (
					<CreateContact 
						onCreateContact={(contact) => {
							this.createContact(contact);
							history.push('/');
						}}
					/>
				)}/>
      </div>
    )
  }
}

export default App;
