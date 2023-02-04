const Profile = ({ profile }: any) => {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile;

const getServersideProps = async (context: any) => {
  return {
    props: {
      profile: {}
    }
  }
}
