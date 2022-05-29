import React from "react";

const MyPortfolieo = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-col">
          <img
            src="https://i.ibb.co/R46JC5w/pp.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
          />

          <div>
            <h1 class="text-5xl font-bold">Rezaul Karim's Portfolieo Site</h1>
            <div class="overflow-x-auto">
              <table class="table-compact">
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
                      I am a junior Frontend Developer with react js, html ,
                      css, javascript, mongodb, firebase, bootstrap, tailwind
                      etc.
                    </td>
                  </tr>
                  <tr>
                    <th>Link of web</th>
                    <td>
                      {" "}
                      <p>
                        <a>1. http://dmjh-health-point.web.app.</a>
                      </p>
                      2.https://jazzy-lebkuchen-45b359.netlify.app/
                      3.https://rezaul11703.github.io/penguin_fashion/
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolieo;
