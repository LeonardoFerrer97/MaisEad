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
        private readonly CursoRepository cursoRepository = new CursoRepository();
        private readonly FaculdadeBusiness faculdadeBusiness = new FaculdadeBusiness();
        private readonly CursoMappers mapper = new CursoMappers();
        public List<CursoDto> GetAllCursos()
        {
            List<Curso> cursos = cursoRepository.GetAllCursos();

            List<CursoDto> cursosDto = mapper.ListEntityToListDto(cursos);
            foreach(var curso in cursosDto)
            {
                curso.Faculdade = faculdadeBusiness.GetFaculdadeById(curso.Faculdade.Id);
            }
            return cursosDto;
        }
    }
}
