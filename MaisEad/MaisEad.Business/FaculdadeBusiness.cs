using System;
using System.Collections.Generic;
using MaisEad.Dto.Dto;
using MaisEad.Entity.Entity;
using MaisEad.Repository.FaculdadeRepository;
using MaisEad.Utils.Mappers;

namespace MaisEad.Business
{
    public class FaculdadeBusiness
    {
        private readonly FaculdadeRepository faculdadeRepository = new FaculdadeRepository();
        private readonly FaculdadeMappers mapper = new FaculdadeMappers();
        public List<FaculdadeDto> GetAllFaculdade()
        {
            List<Faculdade> faculdade = faculdadeRepository.GetAllFaculdade();
            return mapper.ListEntityToListDto(faculdade);
        }

        public FaculdadeDto GetFaculdadeById(int id)
        {
            return mapper.EntityToDto(faculdadeRepository.GetFaculdadeById(id));
        }

        public FaculdadeDto GetFaculdadeByNome(string nome)
        {
            return mapper.EntityToDto(faculdadeRepository.GetFaculdadeByNome(nome));
        }

        public int UpdateFaculdadeById(FaculdadeDto faculdade)
        {
           return faculdadeRepository.UpdateFaculdadeById(mapper.DtoToEntity(faculdade));
        }

        public int DeleteFaculdadeById(int id)
        {
            return faculdadeRepository.DeleteFaculdadeById(id);
        }

        public int InsertFaculdade(FaculdadeDto faculdade)
        {
            return faculdadeRepository.InsertFaculdade(mapper.DtoToEntity(faculdade));
        }
    }
}
