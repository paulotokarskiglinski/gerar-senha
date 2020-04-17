# Gerador de Senhas

Um simples gerador de senhas para utilizar em suas aplicações.

**Como usar?**
```shel
npm i gerar-senha
```

```js
const { gerarSenha } = require('gerar-senha');

// Definir parâmetros opcionais
const parametros = {
    tamanho: 12,        // deafult: 8
    numeros: true,      // default: true
    simbolos: true,     // default: true
    maisculo: true,     // default: true
    minusculo: true,    // default: true
    naoIncluir: '@'     // default: ''
};

const senha = gerarSenha(parametros);

console.log(senha);
```

A função `gerarSenha()` irá gerar uma senha aletória com base nos parâmentros passados.

**Exemplos de utilização**
```js
gerarSenha(); // Sem parâmetros passados será utilizado os valores default

gerarSenha({ tamanho: 12 }); // Senha de 12 caracteres incluindo números, letras e símbolos

gerarSenha({ tamanho: 12, simbolos: false }); // Senha de 12 caracteres que não inclui símbolos

gerarSenha({ minusculo: false, maiusculo: false, naoIncluir: '0@!' }); // Não inclui letras maiusculas ou minusculas, o número 0 e os símbolos @ e !
```

<table>
    <thead>
        <tr>
            <th>Parâmetro</th>
            <th>Descrição</th>
            <th>Valor default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>tamanho</td>
            <td>Número de carácteres da senha</td>
            <td>Valor aleatório entre 8 e 16</td>
        </tr>
        <tr>
            <td>simbolos</td>
            <td>Booleano que define se a senha pode conter símbolos</td>
            <td>true</td>
        </tr>
        <tr>
            <td>maiusculo</td>
            <td>Booleano que define se a senha pode conter letras maiúsculas</td>
            <td>true</td>
        </tr>
        <tr>
            <td>minusculo</td>
            <td>Booleano que define se a senha pode conter letras minúsculas</td>
            <td>true</td>
        </tr>
        <tr>
            <td>naoIcluir</td>
            <td>Caracteres que não serão incluídos na senha gerada</td>
            <td>'' (todos carácteres permitidos)</td>
        </tr>
    </tbody>
</table>

*É necessário que pelos menos um dos parâmetros passados seja verdadeiro (`true`) para que uma senha seja gerada.*
