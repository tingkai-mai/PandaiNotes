import { React } from "react";
import SummaryCard from "./SummaryCard";

const SummaryCardGroup = (props) => {
  console.log(props.chosenTags);
  return (
    <>
      {props.chosenTags.includes("Difficult") &&
        Object.values(props.tagContent.difficult).map((tagData) => {
          return (
            <SummaryCard
              tagType="Difficult"
              tagContent={tagData}
              key={Math.random()}
            />
          );
        })}
      {props.chosenTags.includes("Important") &&
        Object.values(props.tagContent.important).map((tagData) => {
          return (
            <SummaryCard
              tagType="Important"
              tagContent={tagData}
              key={Math.random()}
            />
          );
        })}
      {props.chosenTags.includes("For Revision") &&
        Object.values(props.tagContent.revision).map((tagData) => {
          return (
            <SummaryCard
              tagType="For Revision"
              tagContent={tagData}
              key={Math.random()}
            />
          );
        })}
    </>
  );
};

export default SummaryCardGroup;
