import React from "react";
import Link from "next/link";
import { LinearGradient } from "react-text-gradients";

const Signin = () => {
  return (
    <div>
      <form>
        <h1>
          {" "}
          <LinearGradient
            gradient={["to left", "#667db6 ,#0082c8, #0082c8, #667db6"]}
          >
            Faça o Cadastro
          </LinearGradient>
        </h1>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" placeholder="E-mail" />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder="Senha" />
        </div>
        <div>
          <label htmlFor="password">Confirmação de Senha</label>
          <input id="password" type="password" placeholder="Confirmar Senha" />
        </div>
        <button type="submit">
          <Link href="/">Realizar Cadastro</Link>
        </button>
        <button>
          <Link href="/">Voltar para Login</Link>
        </button>
      </form>
    </div>
  );
};

export default Signin;
