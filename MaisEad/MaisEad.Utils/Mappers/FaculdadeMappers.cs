using System;
using System.Collections.Generic;
using MaisEad.Dto.Dto;
using MaisEad.Entity.Entity;

namespace MaisEad.Utils.Mappers
{
    public class FaculdadeMappers
    {
        public FaculdadeDto EntityToDto(Faculdade faculdade)
        {
            return new FaculdadeDto()
            {
                Id = faculdade.Id,
                Nome = faculdade.Nome,
                Endereco = faculdade.Endereco,
                NotaMec = faculdade.NotaMec,
            };

        }

        public List<FaculdadeDto> ListEntityToListDto(IEnumerable<Faculdade> faculdade)
        {
            List<FaculdadeDto> dtos = new List<FaculdadeDto>();
            foreach(var facul in faculdade)
            {
                dtos.Add(EntityToDto(facul));

            }
            return dtos;
        }

        public Faculdade DtoToEntity(FaculdadeDto faculdade)
        {
            return new Faculdade()
            {
                Id = faculdade.Id,
                Nome = faculdade.Nome,
                Endereco = faculdade.Endereco,
                NotaMec = faculdade.NotaMec,
            };

        }

        public List<Faculdade> ListDtoToListEntity(IEnumerable<FaculdadeDto> faculdade)
        {
            List<Faculdade> dtos = new List<Faculdade>();
            foreach (var facul in faculdade)
            {
                dtos.Add(DtoToEntity(facul));

            }
            return dtos;
        }

    }
}
