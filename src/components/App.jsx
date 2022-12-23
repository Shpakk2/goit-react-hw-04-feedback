import React, {useState} from "react";

import css from "./App.module.css"

import { Section } from './Section/Section';
import { FeedbackOptions} from "./FeedbackOptions/FeedbackOptions"
import { Statistics} from "./Statistics/Statistics"


export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = event => {
   switch (event) {
     case "good":
       setGood(good + 1);
       break;
     case "neutral":
       setNeutral(neutral + 1);
       break;
     case "good":
       setBad(good + 1);
       break;
     default:
       return;
    }
  }
  const countTotalFeedback = () => {
    return good + neutral + bad
  }
  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback()
    return total !== Infinity ? Math.round((good * 100) / total) : 0
  }  

  
  return (
    <div className={css.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
      <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics>
      </Section>
    </div>
  )
  
}

// export class App extends React.Component {
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
//   }

//   onLeaveFeedback = event => {
//     this.setState({ [event]: this.state[event] + 1 });
//   }
  
//   countTotalFeedback = () => {
//   return Object.values(this.state).reduce((state, num) => state + num, 0)
//   }

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback()
//     return total !== Infinity ? Math.round((this.state.good * 100) / total) : 0
//   }

//   render() {
//     return (
//       <div className={css.wrapper}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistics">
//         <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
//         </Section>
//       </div>
//     )
//   }
// }