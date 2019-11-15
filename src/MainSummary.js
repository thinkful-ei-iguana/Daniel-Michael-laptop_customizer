import React from "react";
import SummaryOption from "./SummaryOption";
import SummaryTotal from "./SummaryTotal";

export default function MainSummary(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];
    return (
      <SummaryOption
        key={featureHash}
        USCurrencyFormat={props.USCurrencyFormat}
        featureHash={featureHash}
        selectedOption={selectedOption}
        feature={feature}
      />
    );
  });

  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <SummaryTotal total={total} USCurrencyFormat={props.USCurrencyFormat} />
    </section>
  );
}
