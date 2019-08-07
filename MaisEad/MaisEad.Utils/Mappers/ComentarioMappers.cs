using System;
using System.Collections.Generic;
using MaisEad.Dto.Dto;
using MaisEad.Entity.Entity;

namespace MaisEad.Utils.Mappers
{
    public class ComentarioMappers
    {
        public ComentarioDto EntityToDto(Comentario comentario)
        {
            return new ComentarioDto()
            {
                Id = comentario.Id,
                CommentTxt = comentario.CommentTxt,
                CursoId = comentario.CursoId
            };

        }

        public List<ComentarioDto> ListEntityToListDto(List<Comentario> comentarios)
        {
            List<ComentarioDto> dtos = new List<ComentarioDto>();
            foreach (var comentario in comentarios)
            {
                dtos.Add(EntityToDto(comentario));

            }
            return dtos;
        }

        public Comentario DtoToEntity(ComentarioDto comentario)
        {
            return new Comentario()
            {
                Id = comentario.Id,
                CommentTxt = comentario.CommentTxt,
                CursoId = comentario.CursoId
            };
        }

        public List<Comentario> ListDtoToListEntity(List<ComentarioDto> comentarios)
        {
            List<Comentario> dtos = new List<Comentario>();
            foreach (var comentario in comentarios)
            {
                dtos.Add(DtoToEntity(comentario));

            }
            return dtos;
        }
    }
}
