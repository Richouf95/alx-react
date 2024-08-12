import React, { useContext } from "react";
import { AppContext } from "../App/App"; // Assurez-vous d'importer le contexte
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  const { logIn } = useContext(AppContext); // Récupérer la méthode logIn depuis le contexte
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [enableSubmit, setEnableSubmit] = React.useState(false);

  const handleChangeEmail = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEnableSubmit(emailValue.trim() !== "" && password.trim() !== "");
  };

  const handleChangePassword = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setEnableSubmit(email.trim() !== "" && passwordValue.trim() !== "");
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(email, password);
  };

  return (
    <div className={css(styles["App-body"])}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={email} onChange={handleChangeEmail} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={password} onChange={handleChangePassword} />
        <input type="submit" value="OK" disabled={!enableSubmit} />
      </form>
    </div>
  );
};

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
  },
});

export default Login;
