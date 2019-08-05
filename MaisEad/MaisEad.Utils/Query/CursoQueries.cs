using System;
namespace MaisEad.Utils.Query
{
    public class CursoQueries
    {
        public static string GET_ALL_CURSOS = "SELECT * FROM Curso INNER JOIN Comentario ON curso_id = Curso.id INNER JOIN AvaliacaoUsuario ON curso_id_avaliacao = Curso.id ";
    }
}
