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
        event="Ceremony"
        date="Saturday, October 1, 2022"
        time="5:00 pm"
        location="Audry's Farmhouse + The Greenhouses"
        street="2187 Bruynswick Rd,"
        city="Walkill, NY 12589"
        attire="Casual Attire"
      />
      <Event
        event="Time To Party!"
        date="Saturday, October 1, 2022"
        time="6:00 pm - 11:00 pm"
        location="Audry's Farmhouse + The Greenhouses"
        street="2187 Bruynswick Rd,"
        city="Walkill, NY 12589"
        attire="Casual Attire"
      />

    </>
  );
}
