import React from "react";
import { Card, Button } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import style from "./StyleButtons.css";

// * Add <MainCard... /> for adding a new card,
// * the rendering and postion will be automatically added,
// * Since its a single component no states are used.

function CardComponent() {
  return (
    <Carousel breakPoints={breakPoints} style={style}>
      <MainCard
        header="Peace"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."
        cardTitle="Cards Title"
        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
      />

      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."
        cardTitle="Cards Title"
        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
      />

      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."
        cardTitle="Cards Title"
        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
      />

      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."
        cardTitle="Cards Title"
        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
      />
      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."
        cardTitle="Cards Title"
        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
      />
      <MainCard
        header="Cards Header"
        cardTitle="title"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."
        cardTitle="Cards Title"
        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
      />
    </Carousel>
  );
}

// Card layout
const MainCard = (props) => (
  <Card style={mainStyle}>
    <Card.Header style={cardStyle}>{props.header}</Card.Header>
    <Card.Img src={props.image} />

    <Card.Body style={bodyStyle}>
      <Card.Title style={{ color: "#D8F3DC" }}>{props.cardTitle}</Card.Title>
      <Card.Text>{props.cardText}</Card.Text>
      <Button variant="success" href="https://www.android.com">
        Success
      </Button>
    </Card.Body>

    <Card.Footer style={cardStyle}>{props.cardFooter}</Card.Footer>
  </Card>
);

// Styles
const mainStyle = { width: "25vmax", textAlign: "center" };
const cardStyle = { background: "#081C15", color: "#fff" };
const bodyStyle = { background: "#333", color: "#00ff00" };

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

export default CardComponent;