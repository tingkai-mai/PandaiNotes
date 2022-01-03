import { React } from "react";
import SummaryCard from "./SummaryCard";

const SummaryCardGroup = (props) => {
  return (
    <>
      {Object.values(props.tags.difficult).map((tagData) => {
        return <SummaryCard tagType="Difficult" tags={tagData} />;
      })}
      {Object.values(props.tags.important).map((tagData) => {
        return <SummaryCard tagType="Important" tags={tagData} />;
      })}
      {Object.values(props.tags.revision).map((tagData) => {
        return <SummaryCard tagType="For Revision" tags={tagData} />;
      })}
    </>
  );
};

export default SummaryCardGroup;
