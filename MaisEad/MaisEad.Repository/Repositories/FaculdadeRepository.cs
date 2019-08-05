using System;
using MaisEad.Repository.Database;
using MaisEad.Entity.Entity;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
using MaisEad.Utils.Query;

namespace MaisEad.Repository.FaculdadeRepository
{
    public class FaculdadeRepository
    {
        DBConnection dbCon;
        public FaculdadeRepository()
        {
            dbCon = DBConnection.Instance();
            dbCon.DatabaseName = "MaisEaD";
        }

        public List<Faculdade> GetAllFaculdade()
        {
            if (dbCon.IsConnect())
            {
                var cmd = new MySqlCommand(FaculdadeQueries.GET_ALL_FACULDADE, dbCon.Connection);
                var reader = cmd.ExecuteReader();
                List<Faculdade> faculdades = new List<Faculdade>();
                while (reader.Read())
                {
                    faculdades.Add(new Faculdade()
                    {
                        Id = reader.GetInt32(0),
                        Nome = reader.GetString(1),
                        Endereco = reader.GetString(2),
                        NotaMec = reader.GetInt32(3)

                    });
                }
                dbCon.Close();
                return faculdades;
            }
            return null;
        }

        public Faculdade GetFaculdadeById(int id)
        {
            if (dbCon.IsConnect())
            {
                var query = String.Format(FaculdadeQueries.GET_FACULDADE_BY_ID, id);
                var cmd = new MySqlCommand(query, dbCon.Connection);
                var reader = cmd.ExecuteReader();
                Faculdade faculdade = new Faculdade();
                while (reader.Read())
                {
                    faculdade = new Faculdade()
                    {
                        Id = reader.GetInt32(0),
                        Nome = reader.GetString(1),
                        Endereco = reader.GetString(2),
                        NotaMec = reader.GetInt32(3)
                    };
                }
                return faculdade;
            }
            dbCon.Close();
            return null;
        }


        public Faculdade GetFaculdadeByNome(string nome)
        {
            if (dbCon.IsConnect())
            {
                var query = String.Format(FaculdadeQueries.GET_FACULDADE_BY_NOME, nome);
                var cmd = new MySqlCommand(query, dbCon.Connection);
                var reader = cmd.ExecuteReader();
                Faculdade faculdade = new Faculdade();
                while (reader.Read())
                {
                    faculdade = new Faculdade()
                    {
                        Id = reader.GetInt32(0),
                        Nome = reader.GetString(1),
                        Endereco = reader.GetString(2),
                        NotaMec = reader.GetInt32(3)
                    };
                }
                return faculdade;
            }
            dbCon.Close();
            return null;
        }

        public int UpdateFaculdadeById(Faculdade faculdade)
        {
            if (dbCon.IsConnect())
            {
                var query = String.Format(FaculdadeQueries.UPDATE_FACULDADE_BY_ID, faculdade.Nome, faculdade.Endereco, faculdade.NotaMec, faculdade.Id) ;
                var cmd = new MySqlCommand(query, dbCon.Connection);
                return cmd.ExecuteReader().RecordsAffected;
            }
            return 0;
        }

        public int DeleteFaculdadeById(int id)
        {
            if(dbCon.IsConnect())
            {
                var query = String.Format(FaculdadeQueries.DELETE_FACULDADE_BY_ID, id);
                var cmd = new MySqlCommand(query, dbCon.Connection);
                return cmd.ExecuteReader().RecordsAffected;
            }
            return 0;
        }
        public int InsertFaculdade(Faculdade faculdade)
        {
            if (dbCon.IsConnect())
            {
                var query = String.Format(FaculdadeQueries.INSERT_FACULDADE, faculdade.Nome,faculdade.Endereco,faculdade.NotaMec);
                var cmd = new MySqlCommand(query, dbCon.Connection);
                return cmd.ExecuteReader().RecordsAffected;
            }
            return 0;
        }
    }
}
