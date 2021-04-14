using NRedi2Read.Models;
using NRedi2Read.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace NRedi2Read.Controllers
{
    [ApiController]
    [Route("/api/users")]
    public class UserController : Controller
    {
        
        private readonly UserService _userService;
        
        public UserController(UserService service)
        {
            _userService = service;
        }

        [HttpPost]
        [Route("create")]
        public void Create(User user)
        {
            _userService.Create(user);
        }

        [HttpGet]
        [Route("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public IActionResult Get(long id)
        {
            try
            {
                var data = _userService.Read(id);
                if (data != null)
                {
                    return Ok(data);
                }
            }
            catch
            {
              // ignore  
            }
            return NoContent();
        }

        [HttpPost]
        [Route("load")]
        public void Load(User[] users)
        {
            foreach (var user in users)
            {
                Create(user);
            }
        }
    }
}