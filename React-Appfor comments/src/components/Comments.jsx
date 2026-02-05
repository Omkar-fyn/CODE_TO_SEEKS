import { useEffect, useState } from "react";
import axios from "axios";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get("/api/comments");
        setComments(res.data);
      } catch (err) {
        console.error("Failed to load comments");
      }
    };
    fetchComments();
  }, []);

  const submitComment = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("Login required");

    try {
      const res = await axios.post(
        "/api/comments",
        { text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments([res.data, ...comments]);
      setText("");
    } catch {
      alert("Failed to post comment");
    }
  };

  return (
    <div className=" comments w-[800px] h-[600px] mx-auto mt-10 relative z-10 backdrop-blur-md p-6 rounded-2xl border border-black/40 shadow-xl">
      <p className="text-center font-bold text-2xl text-white">Comments</p>
      <form onSubmit={submitComment} className="flex-col gap-6 flex justify-center items-center ">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          className="w-[750px] h-[200px] p-3 rounded-lg text-center text-black bg-gray-400/30 relative backdrop-blur-md border border-white/60 shadow-xl"
        />
        <button className="mt-2 px-4 py-2 bg-yellow-500 rounded-xl border-black w-30">
          Post Comment
        </button>
      </form>

      {comments.map((comment) => (
        <div
          key={comment._id}
          className="bg-blue-500/20 backdrop-blur-md p-4 rounded-lg mb-3"
        >
          <p className="text-sm text-gray-300">
            @{comment.user.username}
          </p>
          <p className="text-white">{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
