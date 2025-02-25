using AsadAfzal.Models.VM;
using AsadAfzal.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AsadAfzal.Controllers
{
    [Authorize]
    public class DashboardController : Controller
    {
        private readonly IProjectServices _projectServices;
        public DashboardController(IProjectServices projectServices)
        {
            _projectServices = projectServices;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Projects()
        {
            var projectList = _projectServices.GetProjects();
            return View(projectList);
        }
        public IActionResult NewProject() => View();
        [HttpPost]
        public IActionResult NewProject(ProjectsVm projects)
        {
            if (projects.FeatureImage != null)
            {
               projects.ProjectImage = UploadImage(projects.FeatureImage).Result;
            }
            _projectServices.AddNewProject(projects);
            return RedirectToAction("Projects", "Dashboard");
        }
        private async Task<string> UploadImage(IFormFile image)
        {
            if (image == null || image.Length == 0)
            {
                return "Please select an image file."; // Removed extra closing parenthesis
            }

            var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images");

            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            var uniqueFileName = Guid.NewGuid().ToString() + Path.GetExtension(image.FileName);
            var filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(stream);
            }

            return $"/images/{uniqueFileName}";
        }


    }
}
