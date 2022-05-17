import './accommodation.scss';


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
      <div className="row mt-4 mb-5">
      {
        //<div className="row row-cols-1 row-cols-md-2 mt-4 mb-5">
      }
        <div className="col d-none d-md-block col-md-1 col-lg-3"></div>
        <div className="col d-flex flex-direction--column align-items-center justify-content-center pt-3 pb-3">
        {
          //<div className="col d-flex flex-direction--column align-items-center justify-content-center border-right-responsive pt-3 pb-3">
        }
          <h2 className="underground">{props.name}</h2>

          <div className="is-18">{props.description}</div>
          <a
            href={props.link}
            onClick={onClickUrl(props.buttonLink)}
            className="btn btn-sm btn-outline-dark mt-5 underground"
            role="button"
            aria-pressed="true"
            target="_blank"
            rel="noreferrer"
          >
            {props.buttonLabel}
          </a>
        </div>
        <div className="col d-none d-md-block col-md-1 col-lg-3"></div>
      </div>


      <div className="row py-4 justify-content-center d-block">
        <div className="col-2 border-bottom border-dark m-auto">
        </div>
      </div>
    </>
  )
};

export default Event;
