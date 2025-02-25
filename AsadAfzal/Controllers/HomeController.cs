using AsadAfzal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace AsadAfzal.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewBag.ShowHeader = true;
            return View();
        }

        public IActionResult AboutUs()
        {
            ViewBag.ShowHeader = false;
            ViewBag.AboutUs = true;
            return View();
        }

        public IActionResult ContactUs()
        {

            ViewBag.ShowHeader = false;
            return View();
        }
        public IActionResult Gallery()
        {

            return View();
        }
        public IActionResult Blogs()
        {
            ViewBag.ShowHeader = false;
            return View();
        }

        public IActionResult BlogDetail(Guid id)
        {
            return View();
        }
        
        public IActionResult Projects()
        {
            ViewBag.ShowHeader = false;
            return View();
        }

        public IActionResult ProjectDetail(Guid id)
        {
            return View();
        }

        public IActionResult Services()
        {
            ViewBag.ShowHeader = false;
            return View();
        }

        public IActionResult test()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
