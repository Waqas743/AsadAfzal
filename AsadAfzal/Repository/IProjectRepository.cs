using AsadAfzal.DBFactory.Context;
using AsadAfzal.DBFactory.Domains;
using AsadAfzal.Migrations;

namespace AsadAfzal.Repository
{
    public interface IProjectRepository
    {
        Guid AddNewProject(Projects projects);
        List<Projects> GetProjects();
        Projects ProjectDetail(Guid Id);
        void DeleteProject(Guid Id);
    }

    public class ProjectRepository : IProjectRepository
    {
        private readonly ApplicationDbContext _context;
        public ProjectRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public Guid AddNewProject(Projects projects)
        {
            try
            {
                if (projects.Id != null || projects.Id != default || projects.Id.ToString() == "00000000-0000-0000-0000-000000000000")
                {
                    _context.Projects.Add(projects);
                    _context.SaveChanges();
                }
                else
                {
                    var project = _context.Projects.FirstOrDefault(x => x.Id == projects.Id);
                    if (project != null)
                    {
                        project.ProjectDescription = projects.ProjectDescription;
                        project.ProjectTitle = projects.ProjectTitle;
                        project.ProjectType = projects.ProjectType;
                        project.FeatureImage = projects.FeatureImage;
                        _context.Projects.Update(project);
                        _context.SaveChanges();
                    }
                }
                return projects.Id;
            }
            catch (Exception ex) { return new Guid(); }
        }

        public void DeleteProject(Guid Id)
        {
            var project = _context.Projects.FirstOrDefault(x => x.Id == Id);
            if (project != null)
            {
                _context.Projects.Remove(project);
                _context.SaveChanges();
            }
        }

        public List<Projects> GetProjects()
        {
            var projects = _context.Projects.OrderByDescending(x => x.CreatedDate).ToList();
            return projects;
        }

        public Projects ProjectDetail(Guid Id)
        {
            var project = _context.Projects.FirstOrDefault(x => x.Id == Id);
            return project;
        }
    }
}
