import Accommodation from '../accommodation';

export default function Accommodations() {
  return (
    <>
      <div className="row mt-4 justify-content-center">
        <div className="col pb-4 col-lg-6 col-md-8 col-10 border-bottom border-dark">
          <h2 className="section-header">Accommodations</h2>
          <div className="eaves">
            Stay with us!
          </div>
        </div>
      </div>

      <Accommodation
        name="Hotel Name"
        street="2187 Bruynswick Rd,"
        city="Walkill, NY 12589"
        phone="(914) 826 7185"
        description="The Waterfront is located in the heart of historic Salem. It's in walking distance from Pickering Wharf, and Salem Harbor. Shuttle services will be provided from the Salem Waterfront to and from the ceremony and reception. We have a room block secured. Please use Jancsy- Figueredo Room Block when booking!"
      />
      <Accommodation
        name="Other Hotel"
        street="2187 Bruynswick Rd,"
        city="Walkill, NY 12589"
        phone="(914) 826 7720"
        description="A newly built hotel, with a great rooftop bar for cocktails and small bites. The Hotel Salem is a 0.5 mile walk from the Salem Waterfront Hotel, if you choose to utilize the shuttle service."
      />
    </>
  );
}
