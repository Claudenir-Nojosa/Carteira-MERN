"use client";
import React from "react";
import classes from "./Login.module.css";
import Link from "next/link";

const Auth = () => {
  return (
    <>
      <div className={classes.container}>
        <form className={classes.form}>
          <h1 className={classes.heading}>Faça o Login</h1>
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
          <button type="submit" className={classes.button}>
            <Link href="/home">Login</Link>
          </button>
          <div>
            <p>Não tem um usuário? Por favor, faça o cadastro</p>
            <button ><Link href='/signin'>Cadastre-se</Link></button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
