import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2>14.1 How will you improve the performance of a React Application?</h2>
      <p> By making data immutable, also try to use state locally</p>

      <h2>
        14.2 What are the different ways to manage a state in a React
        application?
      </h2>
      <p> Answer: Server state, url state, Global Ui, Local UI state</p>

      <h2>14.3 How does prototypical inheritance work?</h2>

      <h2>
        14.4 Why you do not set the state directly in React. For example, if you
        have `const [products, setProducts] = useState([])`. Why you do not set
        `products = [...]` instead, you use the `setProducts`
      </h2>
      <p>
        Answer: usestate is a react Hook , you can set intial value so you can
        set an array or an obeject , where as the next things only can added
        array element
      </p>

      <h2>
        14.5 You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?{" "}
      </h2>
      <p> Answer: By using map() and find it by obeject desructring</p>
      <h2>14.6 What is a unit test? Why should write unit tests?</h2>
      <p>
        {" "}
        Answer: Unit test is a type of application that used to test indiviual
        component or unit for testtin the site for the developers
      </p>
    </div>
  );
};

export default Blogs;
