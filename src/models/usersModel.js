import banco from '../db/database.js'
let conexao = new banco()

export default class UserModel {
    #id
    #nome
    #email
    #idade

    constructor(id, nome, email, idade) {
        this.#id = id
        this.#nome = nome
        this.#email = email
        this.#idade = idade
    }

    toJson() {
        return {
            "id":this.#id,
            "nome":this.#nome,
            "email":this.#email,
            "idade":this.#idade
        }
    }

    async criar() {
        let sql = "INSERT INTO tb_usuarios (usu_nome, usu_email, usu_idade) VALUES (?,?,?)"
        let parametros = [this.#nome, this.#email, this.#idade]

        let resultado = await conexao.ExecutaComandoNonQuery(sql,parametros)
        return resultado
    }

    async listar() {
        const sql = "SELECT * FROM tb_usuarios"
        return await conexao.ExecutaComando(sql)
    }

    async buscar() {
        const sql = "SELECT * FROM tb_usuarios WHERE usu_id=?"
        const valor = [this.#id]
        return await conexao.ExecutaComando(sql, valor)
    }

    async delete(){
        const sql = "DELETE FROM tb_usuarios WHERE usu_id=?"
        return await conexao.ExecutaComandoNonQuery(sql, this.#id)
    }
}