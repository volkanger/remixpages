export const meta = () => {
    return [{ title: "New Remix App" }];
  };
  
  export default function Index() {
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Welcome to THIS OR THAT</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="./memo"
              rel="noreferrer"
            >
              Memo
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="./demo"
              rel="noreferrer"
            >
              Demo
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    );
  }
  