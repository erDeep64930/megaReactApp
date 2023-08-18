import Layout from "../components/Layout";

const Projects = () => {
  return (
    <Layout>
      <div className="project_section">
        <h2 className="page_header">Projects</h2>
        <div className="project_container">
          <div className="project_card" id="project1">
            <div className="project_number project_number_left">01</div>
            <div className="project_content">
              <div className="project_skills_container">
                <img
                  src="./react.png"
                  alt="pic"
                  className="project_skill"
                />
                <img
                  src="./javascript.png"
                  alt="pic"
                  className="project_skill"
                />
                <img
                  src="./nextjs.png"
                  alt="pic"
                  className="project_skill"
                />
                <img
                  src="./tailwind.png"
                  alt="pic"
                  className="project_skill"
                />
                <img
                  src="./linkedin.png"
                  alt="pic"
                  className="project_skill"
                />
                <img
                  src="./css.png"
                  alt="pic"
                  className="project_skill"
                />
                <img
                  src="./node.png"
                  alt="pic"
                  className="project_skill"
                />
                <img
                  src="./html.png"
                  alt="pic"
                  className="project_skill"
                />
              </div>
              <h2 className="project_heading">Tint & Orange</h2>
              <p className="project_sub_heading">
                its a car modification company which provide you sheets to
                protect your car from scratch
              </p>
              <div className="btn_grp">
                <button className="bg-rose-500 px-5 py2">Read More</button>
                <a>
                  <i className="ri-bubble-chart-line"></i>
                </a>
                <a>
                  <i className="ri-bubble-chart-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
