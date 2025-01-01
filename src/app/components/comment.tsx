"use client"
import React, { useState } from 'react';

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    console.log('New Comment:', newComment); // Check if the input value is captured
    if (newComment.trim()) {
      setComments((prevComments) => {
        const updatedComments = [...prevComments, newComment];
        console.log('Updated Comments:', updatedComments); // Check the new state
        return updatedComments;
      });
      setNewComment(''); // Clear the input field
    }
  };
  

  return (
    <div className='justify-center w-[100%] h-[100%] bg-gray-200  p-9 flex-wrap grid justify-items-center '>
      <h2 className='pb-5'>Comments</h2>
      <div>
      {comments.length > 0 ? (
  comments.map((comment, index) => {
    console.log(`Rendering comment at index ${index}:`, comment);
    return (
      <div key={index} className="comment pb-3">
        {comment}
      </div>
    );
  })
) : (
  <p>No comments yet!</p>
)}
      </div>
      <div>
      <textarea className=''
  value={newComment}
  onChange={(e) => {
    console.log('Typing in textarea:', e.target.value);
    setNewComment(e.target.value);
  }}
  placeholder="Write a comment..."
/>

<button className='flex items-center justify-center pt-2 p-2 border-black border-solid border rounded-lg '
  onClick={() => {
    console.log('Button clicked!');
    handleAddComment();
  }}
>
  Add Comment
</button>
      </div>
    </div>
  );
};

export default CommentsSection;
