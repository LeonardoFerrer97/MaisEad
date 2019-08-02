using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MaisEad.Business.FaculdadeBusiness;
using MaisEad.Dto.Dto;
using Microsoft.AspNetCore.Mvc;

namespace MaisEad.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaculdadeController : ControllerBase
    {
        FaculdadeBusiness faculdadeBusiness = new FaculdadeBusiness();
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<FaculdadeDto>> Get()
        {
            return faculdadeBusiness.getAllFaculdade();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
