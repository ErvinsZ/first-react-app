import React from "react";
import {
  Jumbotron,
  Button,
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Badge
} from "react-bootstrap";
import BookComments from "./MyBadge";

let bookCategories = ["fantasy", "horror", "history", "romance", "scifi"];
let books = {
  fantasy: require("../data/fantasy.json"),
  horror: require("../data/horror.json"),
  history: require("../data/history.json"),
  romance: require("../data/romance.json"),
  scifi: require("../data/scifi.json"),
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: books.fantasy.slice(0, 12),
      categorySelected: this.props.jumboTitle,
      selectedBook: null,
    };
  }
  
 
  showBadge =()=> {
    let badge = document.querySelectorAll(".badge")
    for(let i=0;i<badge.length; i++){
      badge[i].style.display="block"
    }
  
  }

  selectNewBook = (book) => {
    this.setState({ selectedBook: book });
     console.log({ selectedBook: book });
  };


  
  handleDropdownChange = (category) => {
    this.setState({
      books: books[category].slice(0, 12),
      categorySelected: category,
    });
  };

  handleSearchQuery = (searchQuery) => {
    let category = this.state.categorySelected;

    if (searchQuery) {
      let filteredBooks = books[category].filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.setState({ books: filteredBooks.slice(0, 12) });
    } else {
      this.setState({ books: books[category].slice(0, 12) });
    }
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>{this.props.jumboTitle}</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Container>
          <InputGroup>
            <DropdownButton
              as={InputGroup.Prepend}
              id="dropdown-basic-button"
              className="mb-3"
              title={this.state.categorySelected}
            >
              {bookCategories.map((category, index) => {
                return (
                  <Dropdown.Item
                    href="#/action-1"
                    key={`dropdown-category-${index}`}
                    onClick={() => this.handleDropdownChange(category)}
                  >
                    {category}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <FormControl
              placeholder="Search Books by Title"
              aria-label="Search"
              aria-describedby="basic-addon1"
              onChange={(e) => this.handleSearchQuery(e.target.value)}
            />
          </InputGroup>
          <Row>
            {this.state.books ? (
              this.state.books.map((book) => {
                return (
                  <Col xs={6} key={book.asin}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={book.img} 
                        className = "img"
                        onClick={() => this.selectNewBook(book)}
                      />
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>€{book.price}</Card.Text>
                        <div className = "d-flex">
                        <Button variant="primary" onClick={() => this.showBadge()}>Add to Cart</Button>
                        <Badge className = "badge"pill variant="primary ml-5 d-none"> Added</Badge>{' '}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <div> nothing here </div>
            )}
          </Row>
          <Row className="mb-5">
            <BookComments selectedbook={this.state.selectedBook} />
          </Row>
        </Container>
      </div>
    );
  }
}







export default Home;
