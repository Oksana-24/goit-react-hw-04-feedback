import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const showFeedback = value => {
    // if (value === 'good') {
    //   return setGood(prevState => prevState + 1);
    // } else if (value === 'neutral') {
    //   return setNeutral(prevState => prevState + 1);
    // } else {
    //   return setBad(prevState => prevState + 1);
    // }
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback) {
      return Math.round((good / countTotalFeedback()) * 100);
    }
    return 0;
  };
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <div
      style={{
        width: '500px',
        textAlign: 'center',
        border: '1px solid red',
      }}
    >
      <Section title="Please leave feedback">
        <Feedback
          values={['good', 'neutral', 'bad']}
          addFeedback={showFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
