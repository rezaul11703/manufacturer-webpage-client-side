import React from "react";

const Opinion = () => {
  return (
    <div>
      <h2 className="text-4xl my-4"> Any Opinion Please send </h2>
      <div>
        <form className="form-control w-80 max-auto-xs mx-auto p-6 text-center">
          <input
            type="email"
            placeholder="Enter Your Email "
            className="input input-bordered w-full mx-auto max-w-xs my-4"
          />
          <textarea
            type="email"
            placeholder="Enter Your Opinion "
            className="input input-bordered w-full max-w-xs my-4"
          />
          <button className="btn btn-xs sm:btn-sm my-3" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Opinion;
