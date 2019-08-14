using System;
using System.Collections.Generic;
using MaisEad.Dto.Dto;
using MaisEad.Entity.Entity;
using MaisEad.Repository.Repositories;
using MaisEad.Utils.Mappers;
using MaisEad.Utils.Query;

namespace MaisEad.Business
{
    public class CursoBusiness
    {
        private readonly CursoMappers mapper = new CursoMappers();
        private readonly Repository<Curso> cursoDapperRepository;
        private readonly CursoRepository cursoRepository;

        public CursoBusiness(string connection)
        {
            cursoDapperRepository = new Repository<Curso>(connection);
            cursoRepository = new CursoRepository(connection);
        }


        public List<CursoDto> GetAllCursos()
        {
            IEnumerable<Curso> cursos = cursoRepository.getAllCursos();

            List<CursoDto> cursosDto = mapper.ListEntityToListDto(cursos);
            return cursosDto;
        }
    }
}
