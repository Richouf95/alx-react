import React, { useContext } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/App"; // Importer le contexte

function Header() {
  const { user, isLoggedIn, logOut } = useContext(AppContext); // Utiliser le hook useContext pour accéder au contexte

  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      {isLoggedIn && ( // Afficher le message de bienvenue si l'utilisateur est connecté
        <div id="logoutSection" style={{display: "flex", justifyContent: "end"}}>
          <p>
            Welcome {user.email}{" "}
            <button onClick={logOut}>logout</button>
          </p>
        </div>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },
});

export default Header;
