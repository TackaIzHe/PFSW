namespace PFSW.src.Routers
{
    public static class Router{
        public static void index(this IEndpointRouteBuilder app){
            app.MapGet("/",()=> "hello");
            app.MapGet("/1",()=> "hello123");
        }
    }
}