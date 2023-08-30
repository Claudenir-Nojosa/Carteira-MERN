import React from "react";
import classes from "./Signin.module.css";
import Link from "next/link";
import { LinearGradient } from "react-text-gradients";

const Signin = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h1 className={classes.heading}>
          {" "}
          <LinearGradient
            gradient={["to left", "#667db6 ,#0082c8, #0082c8, #667db6"]}
          >
            Faça o Cadastro
          </LinearGradient>
        </h1>
        <div className={classes.inputGroup}>
          <label htmlFor="email" className={classes.label}>
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            className={classes.input}
          />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="password" className={classes.label}>
            Senha
          </label>
          <input
            id="password"
            type="password"
            placeholder="Senha"
            className={classes.input}
          />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="password" className={classes.label}>
            Confirmação de Senha
          </label>
          <input
            id="password"
            type="password"
            placeholder="Confirmar Senha"
            className={classes.input}
          />
        </div>
        <button type="submit" className={classes.button}>
          <Link href="/">Realizar Cadastro</Link>
        </button>
        <button className={classes.voltarLogin}>
          <Link href="/">Voltar para Login</Link>
        </button>
      </form>
    </div>
  );
};

export default Signin;
