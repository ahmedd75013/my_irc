var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossOrigin="anonymous" />
          <link rel="stylesheet" href="css/style.css" />
          <title>Chat</title>
          <div className="join-container">
            <header className="join-header">
              <h1><i className="fas fa-smile" /> ChatCord</h1>
            </header>
            <main className="join-main">
              <form action="chat.html">
                <div className="form-control">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" id="username" placeholder="Enter username..." required />
                </div>
                <div className="form-control">
                  <label htmlFor="room">Room</label>
                  <select name="room" id="room">
                    <option value="Jss">ggg</option>
                    <option value="ddd">xxx</option>
                    <option value="fff">ssss</option>
                    <option value="eee">aaaa</option>
                    <option value="errr">qqq</option>
                    <option value="ffff">jjj</option>	
                  </select>
                </div>
                <button type="submit" className="btn">Join Chat</button>
              </form>
            </main>
          </div>
        </div>
      );
    }
  });