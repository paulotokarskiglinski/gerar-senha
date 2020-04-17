function gerarSenha(params) {
    let tam = Math.floor(Math.random()*8 + 8);
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?@#$%&*()[]{}\|/+-_';

    if (params) {
        chars = '';
        tam = (params.tamanho > 0) ? params.tamanho : 8;
        chars += (typeof params.numeros === 'undefined' || params.numeros) ? '0123456789' : '';
        chars += (typeof params.simbolos === 'undefined' || params.simbolos) ? '!?@#$%&*()[]{}\|/+-_' : '';
        chars += (typeof params.maisculo === 'undefined' || params.maisculo) ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
        chars += (typeof params.minusculo === 'undefined' || params.minusculo) ? 'abcdefghijklmnopqrstuvwxyz' : '';
        const nao = (typeof params.naoIncluir !== 'undefined' && params.naoIncluir.length > 0) ? params.naoIncluir : '';

        [...nao].forEach(n => chars = chars.split(n).join(''));
    }

    return Array(tam).fill(chars).map(x => { return x[Math.floor(Math.random()*chars.length)] } ).join(''); 
}

module.exports = { gerarSenha };
