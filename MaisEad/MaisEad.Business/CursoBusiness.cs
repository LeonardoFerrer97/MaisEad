using System;
using System.Collections.Generic;
using MaisEad.Dto.Dto;
using MaisEad.Entity.Entity;
using MaisEad.Repository.Repositories;
using MaisEad.Utils.Mappers;

namespace MaisEad.Business
{
    public class CursoBusiness
    {
        private readonly FaculdadeBusiness faculdadeBusiness;
        private readonly ComentarioBusiness comentarioBusiness;
        private readonly AvaliacaoUsuarioBusiness avaliacaoUsuarioBusiness;
        private readonly CursoMappers mapper = new CursoMappers();
        private readonly Repository<Curso> cursoRepository;

        public CursoBusiness(string connection)
        {
            faculdadeBusiness = new FaculdadeBusiness(connection);
            comentarioBusiness = new ComentarioBusiness(connection);
            avaliacaoUsuarioBusiness = new AvaliacaoUsuarioBusiness(connection);
            cursoRepository = new Repository<Curso>(connection);
        }


        public List<CursoDto> GetAllCursos()
        {
            IEnumerable<Curso> cursos = cursoRepository.All();

            List<CursoDto> cursosDto = mapper.ListEntityToListDto(cursos);
            foreach(var curso in cursosDto)
            {
                curso.Comentario = comentarioBusiness.GetAllComentariosByCursoId(curso.Id);
                curso.AvaliacaoUsuario = avaliacaoUsuarioBusiness.GetAllAvaliacaoUsuariosByCursoId(curso.Id);
                curso.Faculdade = faculdadeBusiness.GetFaculdadeById(curso.Faculdade.Id);
            }
            return cursosDto;
        }
    }
}
