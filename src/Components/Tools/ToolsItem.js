
const ToolsItem = ({ background, img }) => {
  return (
    <div className={`tools-item ${background}`}>
      <img src={img} alt="" />
    </div>
  );
};

export default ToolsItem;
