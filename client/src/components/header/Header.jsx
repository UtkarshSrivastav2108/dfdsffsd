import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">

        <span className="headerTitleLg">Blogging</span>
        <span className="headerTitleSm">App for</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
    </div>
  );
}
