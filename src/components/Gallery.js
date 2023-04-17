// object stylesheet
const heading = {
    color : "red",
    fontSize: 40
}

export function Gallery() {
  return (
    <section>
      <h1 style={heading}>Amazing puppy</h1>
      <Profile />
      <Profile />
    </section>
  );
}

function Profile() {
  return (
    <img
      style={{ paddingRight: 10, width: 300, }}
      src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt=""
    />
  );
}
