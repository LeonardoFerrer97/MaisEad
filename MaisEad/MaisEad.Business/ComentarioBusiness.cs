using System;
using System.Collections.Generic;
using MaisEad.Dto.Dto;
using MaisEad.Entity.Entity;
using MaisEad.Repository.Repositories;
using MaisEad.Utils.Mappers;

namespace MaisEad.Business
{
    public class ComentarioBusiness
    {
        private readonly ComentarioRepository comentarioRepository = new ComentarioRepository();
        private readonly ComentarioMappers mapper = new ComentarioMappers();
        public List<ComentarioDto> GetAllComentarios()
        {
            List<Comentario> comentarios = comentarioRepository.GetAllComentarios();

            List<ComentarioDto> comentariosDto = mapper.ListEntityToListDto(comentarios);
            return comentariosDto;
        }

        public List<ComentarioDto> GetAllComentariosById(int id)
        {
            List<Comentario> comentarios = comentarioRepository.GetAllComentariosById(id);

            List<ComentarioDto> comentariosDto = mapper.ListEntityToListDto(comentarios);
            return comentariosDto;
        }

        public List<ComentarioDto> GetAllComentariosByCursoId(int cursoId)
        {
            List<Comentario> comentarios = comentarioRepository.GetAllComentariosByCursoId(cursoId);

            List<ComentarioDto> comentariosDto = mapper.ListEntityToListDto(comentarios);
            return comentariosDto;
        }
    }
}
