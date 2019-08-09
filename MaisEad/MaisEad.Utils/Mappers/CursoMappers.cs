using System;
using System.Collections.Generic;
using MaisEad.Dto.Dto;
using MaisEad.Entity.Entity;

namespace MaisEad.Utils.Mappers
{
    public class CursoMappers
    {
        public CursoDto EntityToDto(Curso curso)
        {
            return new CursoDto()
            {
                Id = curso.Id,
                Nome = curso.Nome,
                Faculdade = new FaculdadeDto ()
                {
                    Id = curso.FaculdadeId,
                },
                Duracao = curso.Duracao,
                Mensalidade = curso.Mensalidade,
                NotaMec = curso.NotaMec,
                PontoApoio = curso.PontoApoio,
                Url = curso.Url,
            };

        }

        public List<CursoDto> ListEntityToListDto(IEnumerable<Curso> cursos)
        {
            List<CursoDto> dtos = new List<CursoDto>();
            foreach (var curso in cursos)
            {
                dtos.Add(EntityToDto(curso));

            }
            return dtos;
        }

        public Curso DtoToEntity(CursoDto curso)
        {
            return new Curso()
            {
                Id = curso.Id,
                Nome = curso.Nome,
                Duracao = curso.Duracao,
                Mensalidade = curso.Mensalidade,
                NotaMec = curso.NotaMec,
                PontoApoio = curso.PontoApoio,
                Url = curso.Url,
            };
        }

        public List<Curso> ListDtoToListEntity(IEnumerable<CursoDto> cursos)
        {
            List<Curso> dtos = new List<Curso>();
            foreach (var curso in cursos)
            {
                dtos.Add(DtoToEntity(curso));

            }
            return dtos;
        }

    }
}
