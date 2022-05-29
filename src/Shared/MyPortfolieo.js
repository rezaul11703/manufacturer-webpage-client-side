import React from "react";

const MyPortfolieo = () => {
  return (
    <div>
      <h2> Rezaul Karim's Portfolieo Site</h2>
      <div class="avatar">
        <div class="w-24 rounded-full">
          <img src="https://i.ibb.co/R46JC5w/pp.jpg" />
        </div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <tbody>
              <tr>
                <th>Name</th>
                <td>Md. Rezaul Karim </td>
              </tr>
              <tr>
                <th>Educational background</th>
                <td>Hsc </td>
              </tr>
              <tr>
                <th>
                  List of technologies or skills you have as a web developer
                </th>
                <td>
                  I am a junior Frontend Developer with react js, html , css,
                  javascript, mongodb, firebase, bootstrap, tailwind etc.
                </td>
                <th>Link of web</th>
                <td>
                  {" "}
                  1. http://dmjh-health-point.web.app. 2.
                  https://jazzy-lebkuchen-45b359.netlify.app/
                  3.https://rezaul11703.github.io/penguin_fashion/
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolieo;
