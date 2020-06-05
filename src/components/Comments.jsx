import React from 'react'

class Comments extends React.Component {
    state = {
        comments: []

        
    }



    componentDidMount = async () => {
        console.log("I'm in the componentDidMount method")
        try {
          let response = await fetch("https://striveschool.herokuapp.com/api/comments/",{
            headers: {
                "Authorization": "Basic " + btoa("user12:5s*f!thGyuC8xm&h")
            }
            })
          let comments = await response.json()
          console.log('Comments: ', comments)
          this.setState({
            comments: comments
          })
        } catch (err) {
          console.log('error!', err)
        }
      }

      render() {
        return (
          <div className="mt-2">
            <ListGroup>
              {this.state.comments.map((comment, i) => {
                return (
                  <ListGroup.Item key={i}>
                     {comment.comment} : {comment.rate}
                  </ListGroup.Item>
                )
              })
              }
            </ListGroup>
            {this.state.comments.length === 0 && (<div></div>)}
          </div>
        )
      }

}

export default Comments