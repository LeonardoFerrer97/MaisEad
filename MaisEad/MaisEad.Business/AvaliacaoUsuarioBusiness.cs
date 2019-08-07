using System;
using System.Collections.Generic;
using MaisEad.Dto.Dto;
using MaisEad.Entity.Entity;
using MaisEad.Repository.Repositories;
using MaisEad.Utils.Mappers;

namespace MaisEad.Business
{
    public class AvaliacaoUsuarioBusiness
    {
        private readonly AvaliacaoUsuarioRepository avaliacaoUsuarioRepository = new AvaliacaoUsuarioRepository();
        private readonly AvaliacaoUsuarioMappers mapper = new AvaliacaoUsuarioMappers();
        public List<AvaliacaoUsuarioDto> GetAllAvaliacaoUsuarios()
        {
            List<AvaliacaoUsuario> avaliacaoUsuarios= avaliacaoUsuarioRepository.GetAllAvaliacaoUsuario();

            List<AvaliacaoUsuarioDto> avaliacoesUsuario = mapper.ListEntityToListDto(avaliacaoUsuarios);
            return avaliacoesUsuario;
        }

        public List<AvaliacaoUsuarioDto> GetAllAvaliacaoUsuariosById(int id)
        {
            List<AvaliacaoUsuario> avaliacaoUsuarios = avaliacaoUsuarioRepository.GetAllAvaliacoesUsuarioById(id);

            List<AvaliacaoUsuarioDto> avaliacoesUsuario = mapper.ListEntityToListDto(avaliacaoUsuarios);
            return avaliacoesUsuario;
        }

        public List<AvaliacaoUsuarioDto> GetAllAvaliacaoUsuariosByCursoId(int cursoId)
        {
            List<AvaliacaoUsuario> avaliacaoUsuarios = avaliacaoUsuarioRepository.GetAllAvaliacoesUsuarioByCursoId(cursoId);

            List<AvaliacaoUsuarioDto> avaliacoesUsuario = mapper.ListEntityToListDto(avaliacaoUsuarios);
            return avaliacoesUsuario;
        }


    }
}
