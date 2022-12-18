export const Statistics = ({ good, neutral, bad, total = 0, positivePercentage = 0,}) => {
    return (
total > 0 ? (        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
       </ul>) : <p>There is no feedback</p>
    )
}