using PFSW.src.Routers;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

Router.index(app);


app.Run();
