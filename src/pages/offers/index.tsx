const Offers = ({ offers }: any) => {
  return (
    <div>
      <h1>Offers</h1>
    </div>
  )
}

export default Offers;

const getServersideProps = async (context: any) => {
  return {
    props: {
      offers: {}
    }
  }
}
