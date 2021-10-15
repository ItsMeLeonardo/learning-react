import './styles.css'
export default function SearchItems({name, email, username}) {
  return (
    <div>
      <p>
        <span className="txt-bold">Name:</span>
        {name}
      </p>
      <p>
        <span className="txt-bold">Email:</span>
        {email}
      </p>
      <p>
        <span className="txt-bold">username:</span>
        {username}
      </p>
    </div>
  );
}