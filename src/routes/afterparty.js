const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
  if (newWindow) newWindow.opener = null
};

const onClickUrl = (url) => {
  return () => openInNewTab(url)
}

export default function Accommodations() {


  return (
    <>
      <div className="row mt-4 justify-content-center">
        <div className="col pb-2 col-lg-6 col-md-8 col-10 border-bottom border-dark">
          <h2 className="section-header">Afterparty</h2>
          <div className="eaves">
          </div>
        </div>
      </div>

      <div className="row mt-4 justify-content-center">
        <div className="col pt-1 pb-4 col-lg-6 col-md-8 col-10">
          We will be hosting an afterparty at Audrey's from 10:30 pm - 12:30 am, because who is ever ready for the party to end?! The bar will continue along with some karaoke, late night snacks, and s'mores.
        </div>
      </div>

      <div className="row mt-4 justify-content-center">
        <div className="col pt-1 col-lg-6 col-md-8 col-10">
          Please use this Google Form to view the song catalog and make song requests to keep the music flowing on Saturday:
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col pt-1 pb-4 col-lg-6 col-md-8 col-10">
          <a
            href="https://forms.gle/VsUFMUjr7fmLHkDo9"
            onClick={onClickUrl("https://forms.gle/VsUFMUjr7fmLHkDo9")}
            className="btn btn-sm btn-outline-dark mt-5 underground"
            role="button"
            aria-pressed="true"
            target="_blank"
            rel="noreferrer"
          >
            Google Forms
          </a>
        </div>
      </div>

    </>
  );
}
