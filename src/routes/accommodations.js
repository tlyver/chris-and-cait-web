import Accommodation from '../accommodation';

export default function Accommodations() {
  return (
    <>
      <div className="row mt-4 justify-content-center">
        <div className="col pb-4 col-lg-6 col-md-8 col-10 border-bottom border-dark">
          <h2 className="section-header">Accommodations</h2>
          <div className="eaves">
            Please note: Accomodations in the area are going fast this weekend as there is a home football game at West Point as well as Parents' Weekend at SUNY New Paltz. Please consider booking early!
          </div>
        </div>
      </div>

      <div className="row mt-4 justify-content-center">
        <div className="col pt-1 pb-4 col-lg-4 col-md-6 col-sm-8 col-9 border-bottom border-dark">
          <h3 className="section-header">Primary Hotel Block</h3>
        </div>
      </div>
      
      <Accommodation
        name="Crossroads"
        street="5 Lakeside Rd."
        city="Newburgh, NY 12550"
        phone="(845) 567-0567"
        description="We have reserved a block of rooms at the Crossroads Hotel in Newburgh NY. This location is about 30 minutes from Audrey's and 10 minutes from the Newburgh waterfront where we will be having a welcome drinks event on Friday 9/30. A shuttle will be provided to and from Audrey's on Saturday."
        hotelLink="https://www.choicehotels.com/reservations/groups/ce40h4"
      />

      <div className="row mt-4 justify-content-center">
        <div className="col pt-1 pb-4 col-lg-4 col-md-6 col-sm-8 col-9 border-bottom border-dark">
          <h3 className="section-header">Other Recommendations</h3>
        </div>
      </div>

      <Accommodation
        name="Minnewaska Lodge"
        street="3116 US-44"
        city="Gardiner, NY 12525"
        phone="(845) 255-1110"
        description="This cozy mountain lodge is located 10 minutes from Audrey's. This is a great option if you're looking to take advantage of some of the great outdoor activities in The 'Gunks throughout the weekend! Rooms here will probably go fast this time of year. Of note, transportation will not be provided to or from Audrey's Saturday."
        hotelLink="https://www.minnewaskalodge.com/"
      />
      <Accommodation
        name="Hampton Inn"
        street="4 S Putt Corners Rd."
        city="New Paltz, NY 12561"
        phone="(845) 255-4200"
        description="The Hampton Inn is located about 20 minutes away from Audrey's in downtown New Paltz. It's also a great option if you want to explore this college town while being close to the local hiking trails and the weekend's activities. Transportation will not be provided to or from Audrey's Saturday."
        hotelLink="https://www.hilton.com/en/hotels/pounphx-hampton-new-paltz/"
      />
      <Accommodation
        name="B&amp;Bs, Airbnb &amp; VRBO"
        description="There are plenty of appealing private accommodations and renowned Bed & Breakfasts in the area for groups both large and small."
      />
    </>
  );
}
