using System;
using System.Collections.Generic;
using MaisEad.Dto.Dto;
using MaisEad.Entity.Entity;
using MaisEad.Repository.Repositories;
using MaisEad.Utils.Mappers;
using MaisEad.Utils.Query;

namespace MaisEad.Business
{
    public class AvaliacaoUsuarioBusiness
    {
        private readonly AvaliacaoUsuarioMappers mapper = new AvaliacaoUsuarioMappers();
        private readonly Repository<AvaliacaoUsuario> avaliacaoUsuarioRepository;

        public AvaliacaoUsuarioBusiness(string connection)
        {
            avaliacaoUsuarioRepository = new Repository<AvaliacaoUsuario>(connection);
        }


        public List<AvaliacaoUsuarioDto> GetAllAvaliacaoUsuarios()
        {
            IEnumerable<AvaliacaoUsuario> avaliacaoUsuarios= avaliacaoUsuarioRepository.All();

            List<AvaliacaoUsuarioDto> avaliacoesUsuario = mapper.ListEntityToListDto(avaliacaoUsuarios);
            return avaliacoesUsuario;
        }

        public List<AvaliacaoUsuarioDto> GetAllAvaliacaoUsuariosById(int Id)

        {
            object parameters = new { Id };
            IEnumerable<AvaliacaoUsuario> avaliacaoUsuarios = avaliacaoUsuarioRepository.GetData(AvaliacaoUsuarioQueries.GET_AVALIACAOUSUARIO_BY_ID,parameters);

            List<AvaliacaoUsuarioDto> avaliacoesUsuario = mapper.ListEntityToListDto(avaliacaoUsuarios);
            return avaliacoesUsuario;
        }

        public List<AvaliacaoUsuarioDto> GetAllAvaliacaoUsuariosByCursoId(int CursoIdAvaliacao)
        {
            object parameters = new { CursoIdAvaliacao };
            IEnumerable<AvaliacaoUsuario> avaliacaoUsuarios = avaliacaoUsuarioRepository.GetData(AvaliacaoUsuarioQueries.GET_AVALIACAOUSUARIO_BY_CURSO_ID,parameters);

            List<AvaliacaoUsuarioDto> avaliacoesUsuario = mapper.ListEntityToListDto(avaliacaoUsuarios);
            return avaliacoesUsuario;
        }


    }
}
