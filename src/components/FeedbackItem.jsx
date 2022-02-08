// import { useState } from "react";

function FeedbackItem({item}) {
  // const [rating, setRating] = useState(7)
  // const [text, setText] = useState('Example feedback item')
  // const handleClick = () => {
  //   setRating((prev)=>{
  //     return prev + 1;
  //   })
  // }

  return <div className="card">
    <div className="num-display">{item.rating}</div>
    <div className="text-display">{item.text}</div>
    {/* <button onClick={handleClick}>Click</button> */}
  </div>;
}

export default FeedbackItem;
