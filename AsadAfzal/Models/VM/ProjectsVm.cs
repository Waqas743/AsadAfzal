namespace AsadAfzal.Models.VM
{
    public class ProjectsVm
    {
        public Guid? Id { get; set; }
        public string? ProjectTitle {  get; set; }
        public string? ProjectDescription { get; set; }
        public IFormFile? FeatureImage { get; set; }
        public string? ProjectImage { get; set; }
        public string? ProjectType { get; set; }
        public Guid CreatedBy { get; set; }
        public Guid ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public List<IFormFile> GalleryImages { get; set; }
    }
}
