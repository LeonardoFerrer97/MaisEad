using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MaisEad.Business;
using MaisEad.Dto.Dto;
using MaisEad.Utils.ConnectionStrings;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace MaisEad.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AvaliacaoUsuarioController : ControllerBase
    {
        private readonly AvaliacaoUsuarioBusiness avaliacaoUsuarioBusiness;

        private readonly string connection;

        public AvaliacaoUsuarioController(IOptions<ConnectionStrings> config)
        {
            this.connection = config.Value.DbConnection;
            avaliacaoUsuarioBusiness = new AvaliacaoUsuarioBusiness(connection);
        }


        [HttpGet]
        public ActionResult<IEnumerable<AvaliacaoUsuarioDto>> Get()
        {
            return avaliacaoUsuarioBusiness.GetAllAvaliacaoUsuarios();
        }


        [HttpGet("{id}")]
        public ActionResult<IEnumerable<AvaliacaoUsuarioDto>> GetById(int id)
        {
            return avaliacaoUsuarioBusiness.GetAllAvaliacaoUsuariosById(id);
        }

        [HttpGet("curso/{id}")]
        public ActionResult<IEnumerable<AvaliacaoUsuarioDto>> GetByCursoId(int id)
        {
            return avaliacaoUsuarioBusiness.GetAllAvaliacaoUsuariosByCursoId(id);
        }
    }
}
