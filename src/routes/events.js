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
        event="Welcome Drinks"
        date="Friday, September 30, 2022"
        time="8:00 pm - 10:00 pm"
        location="Billy Joe's Ribworks"
        street="26 Front St,"
        city="Newburgh, NY 12550"
        attire="Casual Attire"
        // map="https://g.page/Ribworks?share"
      />

      <Event
        event="Ceremony"
        date="Saturday, October 1, 2022"
        time="4:30 pm - 5:00 pm"
        location="Audry's Farmhouse + The Greenhouses"
        street="2187 Bruynswick Rd,"
        city="Walkill, NY 12589"
        attire="Cocktail Attire"
      />

      <Event
        event="Cocktail Hour"
        date="Saturday, October 1, 2022"
        time="(TBD check back soon)"
        location="Audry's Farmhouse + The Greenhouses"
        street="2187 Bruynswick Rd,"
        city="Walkill, NY 12589"
        attire="Cocktail Attire"
      />

      <Event
        event="Reception"
        date="Saturday, October 1, 2022"
        time="(TBD check back soon)"
        location="Audry's Farmhouse + The Greenhouses"
        street="2187 Bruynswick Rd,"
        city="Walkill, NY 12589"
        attire="Cocktail Attire"
      />

      <Event
        event="Afterparty"
        date="Saturday, October 1, 2022"
        time="(TBD check back soon)"
        location="Audry's Farmhouse + The Greenhouses"
        street="2187 Bruynswick Rd,"
        city="Walkill, NY 12589"
        attire="Cocktail Attire"
      />

    </>
  );
}
