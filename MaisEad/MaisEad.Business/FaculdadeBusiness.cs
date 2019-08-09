using System;
using System.Collections.Generic;
using MaisEad.Dto.Dto;
using MaisEad.Entity.Entity;
using MaisEad.Repository.Repositories;
using MaisEad.Utils.Mappers;
using MaisEad.Utils.Query;

namespace MaisEad.Business
{
    public class FaculdadeBusiness
    {
        private readonly FaculdadeMappers mapper = new FaculdadeMappers();
        private readonly Repository<Faculdade> faculdadeRepository;

        public FaculdadeBusiness(string connection)
        {
            faculdadeRepository = new Repository<Faculdade>(connection);
        }
        public List<FaculdadeDto> GetAllFaculdade()
        {
            IEnumerable<Faculdade> faculdade = faculdadeRepository.All();
            return mapper.ListEntityToListDto(faculdade);
        }

        public FaculdadeDto GetFaculdadeById(int Id)
        {
            return mapper.EntityToDto(faculdadeRepository.Find(new { Id }));
        }

        public FaculdadeDto GetFaculdadeByNome(string Nome)
        {
            return mapper.EntityToDto(faculdadeRepository.Find(new { Nome }));
        }

        public int UpdateFaculdadeById(FaculdadeDto faculdade)
        {
           return faculdadeRepository.InstertOrUpdate(mapper.DtoToEntity(faculdade),new { faculdade.Id });
        }

        public void DeleteFaculdadeById(int Id)
        {
            faculdadeRepository.Remove(new { Id });
        }

        public int InsertFaculdade(FaculdadeDto faculdade)
        {
            return faculdadeRepository.Add(mapper.DtoToEntity(faculdade));
        }
    }
}
