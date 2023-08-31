"use client"
import React from "react";
import classes from "./Login.module.css";
import { LinearGradient } from "react-text-gradients";
import useInput from "@/hooks/use-input";
import Link from "next/link";

const Auth = () => {

  const {
    value: emailValue,
    inputIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    resetInput: resetEmail,
  } = useInput((value) => value.includes("@"));
  const {
    value: passwordValue,
    inputIsValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    resetInput: resetPassword,
  } = useInput((value) => value.trim().length > 6);

  const formIsValid = emailIsValid && passwordIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetPassword();
    resetEmail();

  };


  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1 className={classes.heading}>
          <LinearGradient
            gradient={["to left", "#667db6 ,#0082c8, #0082c8, #667db6"]}
          >
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
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className={classes.error}>Por favor, insira um e-mail válido.</p>
          )}
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
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <p className={classes.error}>Por favor, insira uma senha válida.</p>
          )}
        </div>
        <Link href="/home">
          <p className={`${classes.button} ${formIsValid ? "" : classes.disabled}`}>
            Login
          </p>
        </Link>
        <div className={classes.cadastro}>
          <p>Ou faça um cadastro usando</p>
          <Link href="/signin" className={classes.signupLink}>            Cadastre-se</Link> 

        </div>
      </form>
    </div>
  );
};

export default Auth;