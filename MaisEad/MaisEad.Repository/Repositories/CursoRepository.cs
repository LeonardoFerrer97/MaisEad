using System;
using System.Collections.Generic;
using MaisEad.Entity.Entity;
using MaisEad.Repository.Database;
using MaisEad.Utils.Query;
using MySql.Data.MySqlClient;

namespace MaisEad.Repository.Repositories
{
    public class CursoRepository
    {
        DBConnection dbCon;
        public CursoRepository()
        {
            dbCon = DBConnection.Instance();
            dbCon.DatabaseName = "MaisEaD";
        }

        public List<Curso> GetAllCursos()
        {
            if (dbCon.IsConnect())
            {
                var cmd = new MySqlCommand(CursoQueries.GET_ALL_CURSOS, dbCon.Connection);
                var reader = cmd.ExecuteReader();
                List<Curso> cursos = new List<Curso>();
                while (reader.Read())
                {
                    cursos.Add(new Curso()
                    {
                        Id = Convert.ToInt32(reader["id"].ToString()),
                        NotaMec = reader["notamec"].ToString() == null ? 0 : Convert.ToInt32(reader["notamec"].ToString()),
                        Nome = reader["nome"].ToString(),
                        Duracao = reader["duracao"].ToString(),
                        FaculdadeId = Convert.ToInt32(reader["faculdade_id"].ToString()),
                        Mensalidade = reader["mensalidade"].ToString(),
                        Url = reader["url"].ToString(),
                        PontoApoio = reader["pontoapoio"].ToString(),
                    });
                }

                dbCon.Close();
                return cursos;
            }
            dbCon.Close();
            return null;
        }
    }
}
