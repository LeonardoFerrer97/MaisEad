using System;
using MaisEad.Repository.Database;
using MaisEad.Entity.Entity;
using MySql.Data.MySqlClient;
using System.Collections.Generic;

namespace MaisEad.Repository.FaculdadeRepository
{
    public class FaculdadeRepository
    {
        public FaculdadeRepository()
        {

        }

        public List<Faculdade> GetAllFaculdade()
        {
            var dbCon = DBConnection.Instance();
            dbCon.DatabaseName = "MaisEaD";
            if (dbCon.IsConnect())
            {
                //suppose col0 and col1 are defined as VARCHAR in the DB
                string query = "SELECT * FROM Faculdade";
                var cmd = new MySqlCommand(query, dbCon.Connection);
                var reader = cmd.ExecuteReader();
                List<Faculdade> faculdades = new List<Faculdade>();
                while (reader.Read())
                {
                    faculdades.Add(new Faculdade()
                    {
                        Nome = reader.GetString(1)

                    });
                }
                dbCon.Close();
                return faculdades;
            }
            return null;
        }
    }
}
