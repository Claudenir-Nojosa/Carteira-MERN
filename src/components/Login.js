"use client";
import React from "react";
import classes from "./Login.module.css";
import Link from "next/link";
import { LinearGradient } from "react-text-gradients";

const Auth = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h1 className={classes.heading}>
          <LinearGradient gradient={["to left", "#667db6 ,#0082c8, #0082c8, #667db6"]}>
            Faça o Login
          </LinearGradient>
        </h1>
        <div className={classes.inputGroup}>
          <label htmlFor="email" className={classes.label}>
            Seu E-mail
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
            Sua Senha
          </label>
          <input
            id="password"
            type="password"
            placeholder="Senha"
            className={classes.input}
          />
        </div>
        <button type="submit" className={classes.button}>
          <Link href="/home">Login</Link>
        </button>
        <div className={classes.cadastro}>
          <p>Ou faça um cadastro usando</p>
          <button className={classes.signupLink}>
            <Link href="/signin">Cadastre-se</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
