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
    fetch(`http://localhost:3003/support${window.location.pathname}`)
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