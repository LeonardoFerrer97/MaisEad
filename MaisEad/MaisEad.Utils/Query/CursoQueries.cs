using System;
namespace MaisEad.Utils.Query
{
    public class CursoQueries
    {
        public static string GET_ALL_CURSOS = "SELECT " +
            "Id," +
            "NotaMec," +
            "Nome," +
            "Duracao," +
            "FaculdadeId," +
            "Mensalidade," +
            "Url," +
            "PontoApoio," +
            "FaculId," +
            "NotaMecFaculdade," +
            "Endereco," +
            "NomeFaculdade," +
            "ComentarioId," +
            "CursoId," +
            "CommentTxt," +
            "AvaliacaoUsuarioId" +
            ",CursoIdAvaliacao " +
            "FROM Curso inner join Faculdade " +
            "on Faculdade.FaculId = Curso.FaculdadeId " +
            "left join Comentario on Curso.Id = comentario.CursoId " +
            "left join AvaliacaoUsuario on Curso.Id = AvaliacaoUsuario.CursoIdAvaliacao";

        public static string GET_ALL_CURSOS_BY_ID = "SELECT " +
        "Id," +
        "NotaMec," +
        "Nome," +
        "Duracao," +
        "FaculdadeId," +
        "Mensalidade," +
        "Url," +
        "PontoApoio," +
        "FaculId," +
        "NotaMecFaculdade," +
        "Endereco," +
        "NomeFaculdade," +
        "ComentarioId," +
        "CursoId," +
        "CommentTxt," +
        "AvaliacaoUsuarioId" +
        ",CursoIdAvaliacao " +
        "FROM Curso inner join Faculdade " +
        "on Faculdade.FaculId = Curso.FaculdadeId " +
        "left join Comentario on Curso.Id = comentario.CursoId " +
        "left join AvaliacaoUsuario on Curso.Id = AvaliacaoUsuario.CursoIdAvaliacao " +
        "WHERE Curso.Id = {0}";
    }
}
