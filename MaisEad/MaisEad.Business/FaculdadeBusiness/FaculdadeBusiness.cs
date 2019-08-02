using System;
using System.Collections.Generic;
using MaisEad.Dto.Dto;
using MaisEad.Entity.Entity;
using MaisEad.Repository.FaculdadeRepository;
using MaisEad.Utils.Mappers;

namespace MaisEad.Business.FaculdadeBusiness
{
    public class FaculdadeBusiness
    {
        private readonly FaculdadeRepository faculdadeRepository = new FaculdadeRepository();
        private readonly FaculdadeMappers mapper = new FaculdadeMappers();
        public List<FaculdadeDto> getAllFaculdade()
        {
            List<Faculdade> faculdade = faculdadeRepository.GetAllFaculdade();
            return mapper.ListEntityToListDto(faculdade);

        }
    }
}
