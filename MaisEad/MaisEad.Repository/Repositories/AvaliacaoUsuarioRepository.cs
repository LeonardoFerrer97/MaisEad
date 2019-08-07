using System;
using System.Collections.Generic;
using MaisEad.Entity.Entity;
using MaisEad.Repository.Database;
using MaisEad.Utils.Query;
using MySql.Data.MySqlClient;

namespace MaisEad.Repository.Repositories
{
    public class AvaliacaoUsuarioRepository
    {
        DBConnection dbCon;
        public AvaliacaoUsuarioRepository()
        {
            dbCon = DBConnection.Instance();
            dbCon.DatabaseName = "MaisEaD";
        }

        public List<AvaliacaoUsuario> GetAllAvaliacaoUsuario()
        {
            if (dbCon.IsConnect())
            {
                var cmd = new MySqlCommand(AvaliacaoUsuarioQueries.GET_AVALIACAOUSUARIO, dbCon.Connection);
                var reader = cmd.ExecuteReader();
                List<AvaliacaoUsuario> avaliacaoUsuarios = new List<AvaliacaoUsuario>();
                while (reader.Read())
                {
                    avaliacaoUsuarios.Add(new AvaliacaoUsuario()
                    {
                        Id = Convert.ToInt32(reader["id"].ToString()),
                        CursoId = Convert.ToInt32(reader["curso_id_avaliacao"].ToString()),
                    });
                }

                dbCon.Close();
                return avaliacaoUsuarios;
            }
            dbCon.Close();
            return null;
        }
        public List<AvaliacaoUsuario> GetAllAvaliacoesUsuarioById(int id)
        {
            if (dbCon.IsConnect())
            {
                var cmd = new MySqlCommand(String.Format(AvaliacaoUsuarioQueries.GET_AVALIACAOUSUARIO_BY_ID,id), dbCon.Connection);
                var reader = cmd.ExecuteReader();
                List<AvaliacaoUsuario> avaliacaoUsuarios = new List<AvaliacaoUsuario>();
                while (reader.Read())
                {
                    avaliacaoUsuarios.Add(new AvaliacaoUsuario()
                    {
                        Id = Convert.ToInt32(reader["id"].ToString()),
                        CursoId = Convert.ToInt32(reader["curso_id_avaliacao"].ToString()),
                    });
                }

                dbCon.Close();
                return avaliacaoUsuarios;
            }
            dbCon.Close();
            return null;
        }

        public List<AvaliacaoUsuario> GetAllAvaliacoesUsuarioByCursoId(int CursoId)
        {
            if (dbCon.IsConnect())
            {
                var cmd = new MySqlCommand(String.Format(AvaliacaoUsuarioQueries.GET_AVALIACAOUSUARIO_BY_CURSO_ID, CursoId), dbCon.Connection);
                var reader = cmd.ExecuteReader();
                List<AvaliacaoUsuario> avaliacaoUsuarios = new List<AvaliacaoUsuario>();
                while (reader.Read())
                {
                    avaliacaoUsuarios.Add(new AvaliacaoUsuario()
                    {
                        Id = Convert.ToInt32(reader["id"].ToString()),
                        CursoId = Convert.ToInt32(reader["curso_id_avaliacao"].ToString()),
                    });
                }

                dbCon.Close();
                return avaliacaoUsuarios;
            }
            dbCon.Close();
            return null;
        }
    }
}
