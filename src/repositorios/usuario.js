const query = require("../infraestrutura/database/queries");

class Usuario {
  listar() {
    const sql = "SELECT * FROM Usuarios";
    return query(sql);
  }
  buscarPorId(id) {
    const sql = "SELECT * FROM Usuarios WHERE id = ?";
    return query(sql, id);
  }
  adicionarUsuario(usuario) {
    const sql = "INSERT INTO Usuarios SET ?";
    return query(sql, usuario);
  }
  alterarId(id, novoId) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return query(sql, [novoId, id]);
  }
  excluirUsuario(id) {
    const sql = "DELETE FROM Usuarios WHERE id = ?";
    return query(sql, id);
  }
  buscarPorNome(nome) {
    const sql = "SELECT * FROM Usuarios WHERE nome like ?";
    return query(sql, nome);
  }
}

module.exports = new Usuario();
