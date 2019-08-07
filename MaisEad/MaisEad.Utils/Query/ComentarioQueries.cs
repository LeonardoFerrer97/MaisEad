using System;
namespace MaisEad.Utils.Query
{
    public class ComentarioQueries
    {
        public static string GET_COMENTARIOS = "SELECT * FROM Comentario";
        public static string GET_COMENTARIOS_BY_ID = "SELECT * FROM Comentario WHERE Id ={0}";
        public static string GET_COMENTARIOS_BY_CURSO_ID = "SELECT * FROM comentarios WHERE curso_id = {0}";
    }
}
