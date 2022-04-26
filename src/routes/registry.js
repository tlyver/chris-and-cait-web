import Registry from '../registry';

export default function Registrys() {
  return (
    <>
      <div className="row mt-4 justify-content-center">
        <div className="col pb-4 col-lg-6 col-md-8 col-10 border-bottom border-dark">
          <h2 className="section-header">Registry</h2>
          <div className="eaves is-20">
            Please do not feel obligated to buy us a gift - your presence is a present in itself! However, should you choose to buy one, we’ve added our hearts’ desires to this registry. We can’t wait to celebrate with you on our wedding day!
          </div>
        </div>
      </div>

      <Registry
        // description="We can have a description for Zola(??)"
        buttonLabel="Zola"
        buttonLink="https://www.zola.com/registry/chrisandcaitwedding"
        name="Zola"
      />
      <Registry
        // description="We can have a description for Amazon(??)"
        buttonLabel="CB2"
        buttonLink="https://www.cb2.com/gift-registry/caitlin-courtois-and-christopher-lyver/r6409329"
        name="CB2"
      />
    </>
  );
}
