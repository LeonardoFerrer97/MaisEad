using System;
namespace MaisEad.Dto.Dto
{
    public class CursoDto
    {
        public int Id { get; set; }
        public ComentarioDto Comentario { get; set; }
        public AvaliacaoUsuarioDto AvaliacaoUsuario { get; set; }
        public int NotaMec { get; set; }
        public string Duracao { get; set; }
        public int Url { get; set; }
        public string Nome { get; set; }
        public string PontoApoio { get; set; }
        public string Mensalidade { get; set; }
    }
}
