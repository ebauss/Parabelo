var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:3000")
                          .AllowCredentials()
                          .AllowAnyHeader();
                      });
});

var app = builder.Build();

app.UseCors(MyAllowSpecificOrigins);

app.MapGet("/", () => "Hello World!");
app.MapGet("/getOpenAIApiKey", () => "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");

app.Run();
