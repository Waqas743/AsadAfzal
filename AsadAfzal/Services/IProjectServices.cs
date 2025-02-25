using AsadAfzal.DBFactory.Domains;
using AsadAfzal.Models.VM;
using AsadAfzal.Repository;

namespace AsadAfzal.Services
{
    public interface IProjectServices
    {
        Guid AddNewProject(ProjectsVm projects);
        List<ProjectsVm> GetProjects();
        ProjectsVm ProjectDetail(Guid Id);
        void DeleteProject(Guid Id);
    }

    public class ProjectServices : IProjectServices
    {
        private readonly IProjectRepository _projectRepository;
        public ProjectServices(IProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
        }

        public Guid AddNewProject(ProjectsVm projects)
        {
          return _projectRepository.AddNewProject(MappedToNewProject(projects));
        }

        public void DeleteProject(Guid Id)
        {
            _projectRepository.DeleteProject(Id);
        }

        public List<ProjectsVm> GetProjects()
        {
            return MappedGetProjects(_projectRepository.GetProjects());
        }

        public ProjectsVm ProjectDetail(Guid Id)
        {
            return MappedProjectDetail(_projectRepository.ProjectDetail(Id));
        }

        private Projects MappedToNewProject(ProjectsVm projects) {
            return new Projects(){
                CreatedBy = projects.CreatedBy,
                FeatureImage = projects.ProjectImage,
                ProjectDescription = projects.ProjectDescription,
                ProjectType = projects.ProjectType,
                ProjectTitle = projects.ProjectTitle
            };
        }

        private List<ProjectsVm> MappedGetProjects(List<Projects> projects)
        {
            List<ProjectsVm> projectsVms = new List<ProjectsVm>();
            projects.ForEach(x =>
            {
                projectsVms.Add(new ProjectsVm() 
                {
                    CreatedBy = x.CreatedBy,
                    ProjectImage = x.FeatureImage,
                    ProjectDescription = x.ProjectDescription,
                    ProjectType = x.ProjectType,
                    ProjectTitle = x.ProjectTitle,
                    Id = x.Id,
                });
            });

            return projectsVms;
        }

        private ProjectsVm MappedProjectDetail(Projects projects)
        {
            return new ProjectsVm()
            {
                CreatedBy = projects.CreatedBy,
                ProjectImage = projects.FeatureImage,
                ProjectDescription = projects.ProjectDescription,
                ProjectType = projects.ProjectType,
                ProjectTitle = projects.ProjectTitle,
            };
        }

    }
}
