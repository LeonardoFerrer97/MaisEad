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

        public List<FaculdadeDto> ListEntityToListDto(List<Faculdade> faculdade)
        {
            List<FaculdadeDto> dtos = new List<FaculdadeDto>();
            foreach(var facul in faculdade)
            {
                dtos.Add(EntityToDto(facul));

            }
            return dtos;
        }
    }
}
