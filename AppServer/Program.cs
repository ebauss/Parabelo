var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/getOpenAIApiKey", () => "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");

app.Run();
