using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MaisEad.Business;
using MaisEad.Dto.Dto;
using Microsoft.AspNetCore.Mvc;

namespace MaisEad.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaculdadeController : ControllerBase
    {
        private readonly FaculdadeBusiness faculdadeBusiness = new FaculdadeBusiness();

        [HttpGet]
        public ActionResult<IEnumerable<FaculdadeDto>> Get()
        {
            return faculdadeBusiness.GetAllFaculdade();
        }


        [HttpGet("{id}")]
        public ActionResult<FaculdadeDto> Get(int id)
        {
            return faculdadeBusiness.GetFaculdadeById(id);
        }

        [HttpGet("nome/{nome}")]
        public ActionResult<FaculdadeDto> GetByNome(string nome)
        {
            return faculdadeBusiness.GetFaculdadeByNome(nome);
        }

        [HttpPost]
        public ActionResult<int> Post([FromBody] FaculdadeDto faculdade)
        {
            return faculdadeBusiness.InsertFaculdade(faculdade);
        }

        [HttpPut()]
        public ActionResult<int> Put([FromBody]FaculdadeDto faculdade)
        {
            return faculdadeBusiness.UpdateFaculdadeById(faculdade);
        }

        [HttpDelete("{id}")]
        public ActionResult<int> Delete(int id)
        {
            return faculdadeBusiness.DeleteFaculdadeById(id);
        }
    }
}
