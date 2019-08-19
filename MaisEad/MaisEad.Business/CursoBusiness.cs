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
        private readonly ComentarioBusiness comentarioBusiness;
        private readonly AvaliacaoUsuarioBusiness avaliacaoUsuarioBusiness;
        private readonly CursoRepository cursoRepository;

        public CursoBusiness(string connection)
        {
            cursoDapperRepository = new Repository<Curso>(connection);
            cursoRepository = new CursoRepository(connection);
            comentarioBusiness = new ComentarioBusiness(connection);
            avaliacaoUsuarioBusiness = new AvaliacaoUsuarioBusiness(connection);
        }


        public List<CursoDto> GetAllCursos()
        {
            IEnumerable<Curso> cursos = cursoRepository.getAllCursos();

            List<CursoDto> cursosDto = mapper.ListEntityToListDto(cursos);
            return cursosDto;
        }

        public CursoDto GetCursoById(int id)
        {
            Curso curso = cursoRepository.GetCursoById(id);

            CursoDto cursoDto = mapper.EntityToDto(curso);
            return cursoDto;
        }


        public int PostCurso(CursoDto cursoDto)
        {
            return cursoDapperRepository.Add(mapper.DtoToEntity(cursoDto));
        }

        public int UpdateCurso(CursoDto cursoDto)
        {
            return cursoDapperRepository.Update(mapper.DtoToEntity(cursoDto),new { cursoDto.Id});
        }


        public void DeleteCursoById(int Id)
        {
            comentarioBusiness.DeleteComentarioByCursoId(Id);
            avaliacaoUsuarioBusiness.DeleteAvaliacaoUsuarioByCursoId(Id);
            cursoDapperRepository.Remove(new { Id });
        }
    }
}
