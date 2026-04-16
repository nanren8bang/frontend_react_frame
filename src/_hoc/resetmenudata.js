

//import "./preload.css";

const resetmenudata = (Component, stateChangeFunction) => {
  return (props) => {
    
    return (
      <div className="titled-container">
        <span className="title">{title}</span>
        <div className="titled-content">
          <Component {...props} />
        </div>
      </div>
    );
  };
};
export default withTitle;