using System;
using System.Collections.Generic;
using MaisEad.Entity.Entity;
using MaisEad.Repository.Database;
using MaisEad.Utils.Query;
using MySql.Data.MySqlClient;

namespace MaisEad.Repository.Repositories
{
    public class ComentarioRepository
    {
        DBConnection dbCon;
        public ComentarioRepository()
        {
            dbCon = DBConnection.Instance();
            dbCon.DatabaseName = "MaisEaD";

        }

        public List<Comentario> GetAllComentarios()
        {
            if (dbCon.IsConnect())
            {
                using (dbCon.Connection)
                {
                    var cmd = new MySqlCommand(ComentarioQueries.GET_COMENTARIOS, dbCon.Connection);
                    var reader = cmd.ExecuteReader();
                    List<Comentario> comentarios = new List<Comentario>();
                    while (reader.Read())
                    {
                        comentarios.Add(new Comentario()
                        {
                            Id = Convert.ToInt32(reader["id"].ToString()),
                            CommentTxt = reader["commenttxt"].ToString(),
                            CursoId = Convert.ToInt32(reader["curso_id"].ToString()),
                        });
                    }

                    dbCon.Close();
                    return comentarios;
                }
            }
            dbCon.Close();
            return null;
        }
        public List<Comentario> GetAllComentariosById(int id)
        {
            if (dbCon.IsConnect())
            {
                var cmd = new MySqlCommand(String.Format(ComentarioQueries.GET_COMENTARIOS_BY_ID,id), dbCon.Connection);
                var reader = cmd.ExecuteReader();
                List<Comentario> comentarios = new List<Comentario>();
                while (reader.Read())
                {
                    comentarios.Add(new Comentario()
                    {
                        Id = Convert.ToInt32(reader["id"].ToString()),
                        CommentTxt = reader["commenttxt"].ToString(),
                        CursoId = Convert.ToInt32(reader["curso_id"].ToString()),
                    });
                }

                dbCon.Close();
                return comentarios;
            }
            dbCon.Close();
            return null;
        }

        public List<Comentario> GetAllComentariosByCursoId(int cursoId)
        {
            if (dbCon.IsConnect())
            {
                var cmd = new MySqlCommand(String.Format(ComentarioQueries.GET_COMENTARIOS_BY_CURSO_ID, cursoId, dbCon.Connection));
                var reader = cmd.ExecuteReader();
                List<Comentario> comentarios = new List<Comentario>();
                while (reader.Read())
                {
                    comentarios.Add(new Comentario()
                    {
                        Id = Convert.ToInt32(reader["id"].ToString()),
                        CommentTxt = reader["commenttxt"].ToString(),
                        CursoId = Convert.ToInt32(reader["curso_id"].ToString()),
                    });
                }

                dbCon.Close();
                return comentarios;
            }
            dbCon.Close();
            return null;
        }
    }
}
