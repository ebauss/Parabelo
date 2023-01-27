internal class Program
{
    private static void Main(string[] args)
    {
        var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        builder.Services.AddCors(options =>
        {
            options.AddPolicy(name: MyAllowSpecificOrigins,
                              policy =>
                              {
                                  policy.WithOrigins("http://localhost:3000");
                              });
        });

        app.UseCors(MyAllowSpecificOrigins);

        app.MapGet("/", () => "Hello World!");

        app.MapGet("/getOpenAIApiKey", () => "K9FMqbbEQR9RHsLnA48zT3BlbkFJf4KfIcqkMT0GBcXubtoq");

        app.Run();
    }
}