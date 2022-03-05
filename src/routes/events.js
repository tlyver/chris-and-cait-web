import Event from '../event';

export default function Events() {
  return (
    <>
      <div className="row mt-4 justify-content-center">
        <div className="col pb-4 col-lg-6 col-md-8 col-10 border-bottom border-dark">
          <h2 className="section-header">Events</h2>
          <div className="eaves">
            Celebration Details!
          </div>
        </div>
      </div>

      <Event
        event="Welcome Gathering"
        date="Friday, September 30, 2022"
        time="8:30 pm"
        location="Audry's Farmhouse + The Greenhouses"
        street="2187 Bruynswick Rd,"
        city="Walkill, NY 12589"
        attire="Casual Attire"
      />

    </>
  );
}
