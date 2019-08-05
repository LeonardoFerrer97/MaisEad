using System;
namespace MaisEad.Utils.Query
{
    public class FaculdadeQueries
    {
        public static string GET_ALL_FACULDADE = "SELECT * FROM faculdade";
        public static string GET_FACULDADE_BY_ID = "SELECT * FROM faculdade WHERE id = {0}";

        public static string GET_FACULDADE_BY_NOME = "SELECT * FROM faculdade WHERE nome = '{0}";
        public static string UPDATE_FACULDADE_BY_ID = "UPDATE Faculdade SET nome = '{0}' , endereco = '{1},notamec = {2} WHERE id = {3}";
        public static string DELETE_FACULDADE_BY_ID = "DELETE FROM Faculdade WHERE id = {0}";
        public static string INSERT_FACULDADE = "INSERT INTO Faculdade (nome,endereco,notamec) VALUES ('{0}','{1}',{2})";
    }
}
