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
    public class ComentarioController : ControllerBase
    {
        private readonly ComentarioBusiness comentarioBusiness = new ComentarioBusiness();

        [HttpGet]
        public ActionResult<IEnumerable<ComentarioDto>> Get()
        {
            return comentarioBusiness.GetAllComentarios();
        }


        [HttpGet("{id}")]
        public ActionResult<IEnumerable<ComentarioDto>> GetById(int id)
        {
            return comentarioBusiness.GetAllComentariosById(id);
        }

        [HttpGet("curso/{id}")]
        public ActionResult<IEnumerable<ComentarioDto>> GetByCursoId(int id)
        {
            return comentarioBusiness.GetAllComentariosByCursoId(id);
        }
    }
}
