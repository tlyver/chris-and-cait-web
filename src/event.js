import './event.scss';
// import { FaChampagneGlasses } from 'react-icons/fa';
// import { FaRing } from 'react-icons/fa';
// import { FaBeer } from 'react-icons/fa';


const Event = props => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null
  };

  const onClickUrl = (url) => {
    return () => openInNewTab(url)
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 mt-4 mb-5">
        <div className="col d-flex flex-direction--column align-items-center justify-content-center border-right-responsive pt-3 pb-3">
          {/* <img
            src={process.env.PUBLIC_URL + props.icon}
            alt="<3"
            className="w-25 framed-image"
          /> */}
          <h2 className="underground">{props.event}</h2>
          <div className="eaves is-20">{props.date}</div>
          <div className="eaves is-20">{props.time}</div>
          <div className="eaves is-20">{props.info}</div>
          <div className="mt-2">{props.attire}</div>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center underground pt-3 pb-3">
          <img
            src={process.env.PUBLIC_URL + props.icon}
            alt="<3"
            className="w-15 framed-image"
          />
          {/* <FaChampagneGlasses /> */}
          <div>{props.location}</div>
          <div className="d-flex flex-column address">
            <div>
              {props.street}
            </div>
            <div>
              {props.city}
            </div>
          </div>
          {/* <div className="mt-3">{props.attire}</div> */}
          {/* <a
            href={props.map}
            onClick={onClickUrl(props.map)}
            className="btn btn-sm btn-outline-dark mt-3 underground"
            role="button"
            aria-pressed="true"
            target="_blank"
            rel="noreferrer"
          >
            Map
          </a> */}
          {
            /*
            <a
            onClick={onClickUrl('https://stackoverflow.com')}
            className="btn btn-sm btn-outline-dark underground mt-2"
            role="button"
            aria-pressed="true"
            >
            Add To Calendar
            </a>
            */
          }
        </div>
      </div>


      <div className="row py-4 justify-content-center d-block d-md-none">
        <div className="col-2 border-bottom border-dark m-auto">
        </div>
      </div>
    </>
  )
};

export default Event;
