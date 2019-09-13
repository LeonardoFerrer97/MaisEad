using System;
using System.Collections.Generic;
using MaisEad.Dto.Dto;
using MaisEad.Entity;
using MaisEad.Entity.Entity;

namespace MaisEad.Utils.Mappers
{
    public class TipoMappers
    {
        public TipoDto EntityToDto(Tipo tipo)
        {
            if (tipo != null)
            {
                return new TipoDto()
                {
                    IdTipo = tipo.IdTipo,
                    NomeTipo = tipo.NomeTipo,
                };

            }
            return null;
        }

        public List<TipoDto> ListEntityToListDto(IEnumerable<Tipo> tipo)
        {
            List<TipoDto> dtos = new List<TipoDto>();
            foreach (var type in tipo)
            {
                dtos.Add(EntityToDto(type));

            }
            return dtos;
        }

        public Tipo DtoToEntity(TipoDto tipo)
        {
            return new Tipo()
            {
                IdTipo = tipo.IdTipo,
                NomeTipo = tipo.NomeTipo,
            };

        }

        public List<Tipo> ListDtoToListEntity(IEnumerable<TipoDto> tipo)
        {
            List<Tipo> dtos = new List<Tipo>();
            foreach (var type in tipo)
            {
                dtos.Add(DtoToEntity(type));

            }
            return dtos;
        }

    }
}
