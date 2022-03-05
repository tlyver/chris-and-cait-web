import './event.scss';

export default function Event(props) {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 mt-4 mb-5">
        <div className="col d-flex flex-direction--column align-items-center justify-content-center border-right-responsive pt-5 pb-5">
          <h2 className="underground">{props.event}</h2>
          <div className="eaves is-20">{props.date}</div>
          <div className="eaves is-20">{props.time}</div>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center underground">
          <div>{props.location}</div>
          <div className="d-flex flex-column address">
            <div>
              {props.street}
            </div>
            <div>
              {props.city}
            </div>
          </div>
          <div className="pt-3">{props.attire}</div>
        </div>
      </div>


      <div className="row py-4 justify-content-center d-block d-md-none">
        <div className="col-2 border-bottom border-dark m-auto">
        </div>
      </div>
    </>
  )
}
