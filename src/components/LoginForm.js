import Notification from "./Notification";

const LoginForm = ({
                     handleSubmit,
                     handleUsernameChange,
                     handlePasswordChange,
                     username,
                     password,
                     message
                   }) => {
  return (
    <div>
      <h2>Login</h2>
      <Notification message={message}/>
      <form onSubmit={handleSubmit}>
        <div>
          username
          <input
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm