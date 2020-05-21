var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossOrigin="anonymous" />
        <link rel="stylesheet" href="css/style.css" />
        <title>ChatCord App</title>
        <div className="chat-container">
          <header className="chat-header">
            <h1><i className="fas fa-smile" /> Chat</h1>
            <a href="index.html" className="btn"></a>
          </header>
          <main className="chat-main">
            <div className="chat-sidebar">
              <h3><i className="fas fa-comments" />  Name:</h3>
              <h2 id="room-name" />
              <h3><i className="fas fa-users" /> Users</h3>
              <ul id="users">
              </ul>
            </div>
            <div className="chat-messages" />
          </main>
          <div className="chat-form-container">
            <form id="chat-form">
              <input id="msg" type="text" placeholder="Enter Message" required autoComplete="off" />
              <button className="btn"><i className="fas fa-paper-plane" /> Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});