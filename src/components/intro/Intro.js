import './intro.css';

function Intro(props) {
  return (
    <div className="intro">
      <div style={{
        backgroundImage: `url("/assets/image/${props.imageName}")`
      }} className=" intro paralax">
        <div className="intro--overlay"></div>
        <div className="intro--textContainer">
          <h1 className="intro--textContainer-person">{props.firstName} {props.lastName}</h1>
          <p className="intro--textContainer-title">{props.documentTitle}</p>
        </div>
      </div>
    </div >

  );
}

export default Intro;