
import React from 'react';
import Comment from './Comment.jsx';

class CommentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfComments: 3
    }

    this.onShowMore = this.onShowMore.bind(this);
  }

  onShowMore() {
    this.setState({
      numberOfComments: this.state.numberOfComments + 3
    });
  }
  render () {
    return (
      <div><p className="supportedBy">supported by</p>
      {this.props.users.slice(0, this.state.numberOfComments).map(user => {
        return (
          <Comment user={user} key={user.id}/>
        );
      })}
      {(this.state.numberOfComments <= this.props.users.length) && <p onClick={() => this.onShowMore()} className="more">more...</p>}
      </div>
    )
  }
}

export default CommentList;


// <div>supported by
//         <div>
//         <img src="https://s3.amazonaws.com/uifaces/faces/twitter/91bilal/128.jpg" height="28" width="28"></img>
//         <a href="">Pierre Conrad</a>
//         <p>this album was good</p>
//         </div>
//         <div>
//         <img src="https://s3.amazonaws.com/uifaces/faces/twitter/craigelimeliah/128.jpg" height="28" width="28"></img>
//         <a href="">Toby Toe</a>
//         <p>way to go, the production blew me away</p>
//         </div>
//         <div>
//         <img src="https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg" height="28" width="28"></img>
//         <a href="">Alexandra Garcia</a>
//         <p>Rare to find something so unique sounding these days</p>
//         </div>
// </div>