import { Card } from "react-bootstrap";
import classes from "./SummaryCard.module.scss";

const SummaryCard = (props) => {
  let tagData = props.tagContent;

  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>{tagData.module}</Card.Title>
        <Card.Subtitle>{props.tagType}</Card.Subtitle>
        <hr className={classes["solid-divider"]}></hr>
        <div>{tagData.html}</div>
      </Card.Body>
    </Card>
  );
};

export default SummaryCard;
