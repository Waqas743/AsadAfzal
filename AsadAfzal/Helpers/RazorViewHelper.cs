namespace AsadAfzal.Helpers
{
    public static class RazorViewHelper
    {
        public static string JsVersion { get; private set; }

        public static void Initialize(IConfiguration configuration)
        {
            JsVersion = configuration["JsVersion"] ?? "1.0.0"; // Default value if not found
        }
    }

}
