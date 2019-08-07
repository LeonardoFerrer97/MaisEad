using System;
namespace MaisEad.Utils.Query
{
    public class AvaliacaoUsuarioQueries
    {
        public static string GET_AVALIACAOUSUARIO = "SELECT * FROM AvaliacaoUsuario";
        public static string GET_AVALIACAOUSUARIO_BY_ID = "SELECT * FROM AvaliacaoUsuario WHERE Id ={0}";
        public static string GET_AVALIACAOUSUARIO_BY_CURSO_ID = "SELECT * FROM AvaliacaoUsuario WHERE curso_id_avaliacao = {0}";
    }
}
