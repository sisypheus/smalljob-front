const Offer = ({ offer }: any) => {
  return (
    <div>
      <h1>Offer</h1>
    </div>
  )
} 

export default Offer;

const getServersideProps = async (context: any) => {
  return {
    props: {
      offer: {}
    }
  }
}
