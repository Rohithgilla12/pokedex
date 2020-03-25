import React from "react";
import { Col, Card, CardTitle, CardImg, CardText, Badge } from "shards-react";

const PokeCard = props => {
  return (
    <>
      <Col md="3">
        <Card theme="dark">
          <CardTitle style={{ color: "white" }}>
            {props.pokemon.name.english}
          </CardTitle>
          <CardImg
            top
            src={`https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`}
          />
          <CardText>
            <Badge
              style={{ margin: 10 }}
              theme="success"
            >{`HP: ${props.pokemon.base.HP}`}</Badge>
            <Badge
              style={{ margin: 10 }}
              theme="danger"
            >{`Attack: ${props.pokemon.base.Attack}`}</Badge>
          </CardText>
        </Card>
      </Col>
    </>
  );
};

export default PokeCard;
