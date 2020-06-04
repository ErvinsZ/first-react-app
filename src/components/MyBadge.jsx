import React from "react";
import { Container, ListGroup, Badge, Alert } from "react-bootstrap";

class MyBadge extends React.Component {
  render() {
    return (
      <Container>
        {this.props.selectedBook && (
          <ListGroup className="mt-5">
            {console.log("This is a dish", this.props.selectedBook)}
            <h2 className="text-center mb-3">{this.props.selectedBook.name}</h2>
            {this.props.selectedBook.comments.map((comment, index) => {
              let variant = "";
              switch (comment.rating) {
                case 1:
                  variant = "danger";
                  break;
                case 2:
                  variant = "warning";
                  break;
                case 3:
                  variant = "secondary";
                  break;
                default:
                  variant = "success";
                  break;
              }
              return (
                <ListGroup.Item key={index}>
                  {comment.author}: {comment.comment}
                  <Badge pill variant={variant} className="ml-3">
                    {comment.title}
                  </Badge>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
        {!this.props.selectedBook && (
          <Alert variant="secondary" className="mt-5">
            No dish selected, please click on a Dish to show the comments
          </Alert>
        )}
      </Container>
    );
  }
}

export default MyBadge;
