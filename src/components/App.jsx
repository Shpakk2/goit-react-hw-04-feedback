import React from "react";

import { Section } from './Section/Section';
import { FeedbackOptions} from "./FeedbackOptions/FeedbackOptions"
import { Statistics} from "./Statistics/Statistics"

export class App extends React.Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = event => {
    this.setState({ [event]: this.state[event] + 1 });
  }
  
  countTotalFeedback = () => {
  return Object.values(this.state).reduce((state, num) => state + num, 0)
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback()
    return total !== Infinity ? Math.round((this.state.good * 100) / total) : 0
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
        </Section>
      </div>
    )
  }
}