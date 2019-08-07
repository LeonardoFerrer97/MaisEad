using System;
using System.Collections.Generic;
using MaisEad.Dto.Dto;
using MaisEad.Entity.Entity;

namespace MaisEad.Utils.Mappers
{
    public class AvaliacaoUsuarioMappers
    {
        public AvaliacaoUsuarioDto EntityToDto(AvaliacaoUsuario avaliacao)
        {
            return new AvaliacaoUsuarioDto()
            {
                Id = avaliacao.Id,
                CursoId = avaliacao.CursoId,
            };

        }

        public List<AvaliacaoUsuarioDto> ListEntityToListDto(List<AvaliacaoUsuario> avaliacoes)
        {
            List<AvaliacaoUsuarioDto> dtos = new List<AvaliacaoUsuarioDto>();
            foreach (var avaliacaoUsuario in avaliacoes)
            {
                dtos.Add(EntityToDto(avaliacaoUsuario));

            }
            return dtos;
        }

        public AvaliacaoUsuario DtoToEntity(AvaliacaoUsuarioDto avaliacao)
        {
            return new AvaliacaoUsuario()
            {

                Id = avaliacao.Id,
                CursoId = avaliacao.CursoId,
            };
        }

        public List<AvaliacaoUsuario> ListDtoToListEntity(List<AvaliacaoUsuarioDto> avaliacoes)
        {
            List<AvaliacaoUsuario> dtos = new List<AvaliacaoUsuario>();
            foreach (var avaliacaoUsuario in avaliacoes)
            {
                dtos.Add(DtoToEntity(avaliacaoUsuario));

            }
            return dtos;
        }

    }
}
