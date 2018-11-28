import User from "../../components/user/User";

const JarabiGuitar = () => (
  <div>
    <h1>Learn Jarabi on guitar</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>

    <User>
      {({ data: { me } }) => (
        <>
          {me && <p>Videos here</p>}
          {!me && <p>Sign up here</p>}
        </>
      )}
    </User>
  </div>
);

export default JarabiGuitar;
