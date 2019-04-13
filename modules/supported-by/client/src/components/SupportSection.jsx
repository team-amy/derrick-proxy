import React from 'react';
import CommentList from './CommentList.jsx';
import UserPhotoGrid from './UserPhotoGrid.jsx';

class SupportSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let endpoint = window.location.pathname;

    if (endpoint.length === 1) {
      endpoint = "/1"
    }

    fetch(`http://localhost:3003/support${endpoint}`)
    .then(response => {
      return response.json()
    })
    .then(users => {
      this.setState({
        users: users
      })
    })
  }

  render() {
    return (
      <div className="supportSection">
        <CommentList users={this.state.users}/>
        <UserPhotoGrid users={this.state.users}/>
      </div>
    )
  }
}

export default SupportSection;