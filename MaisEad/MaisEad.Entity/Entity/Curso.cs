using System;
using System.Collections.Generic;

namespace MaisEad.Entity.Entity
{
    public class Curso
    {
        public int Id { get; set; }
        public int FaculdadeId { get; set; }
        public int NotaMec { get; set; }
        public string Duracao { get; set; }
        public string Url { get; set; }
        public string Nome { get; set; }
        public string PontoApoio { get; set; }
        public string Mensalidade { get; set; }
        public Faculdade Faculdade {get;set; }
        public List<Comentario> Comentarios { get; set; }
        public List<AvaliacaoUsuario> AvaliacaoUsuarios { get; set; }
    }
}
