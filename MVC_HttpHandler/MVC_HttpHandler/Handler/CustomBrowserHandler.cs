using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Routing;

namespace MVC_HttpHandler.Handler
{

    public class CustomBrowserRouteHandler : IRouteHandler
    {

        public IHttpHandler GetHttpHandler(RequestContext requestContext)
        {
            return new CustomBrowserHandler(requestContext);
        }
    }

    public class CustomBrowserHandler : IHttpHandler
    {

        private RequestContext requestContext;

        public CustomBrowserHandler()
            : base()
        {

        }

        public CustomBrowserHandler(RequestContext requestContext)
        {
            // TODO: Complete member initialization
            this.requestContext = requestContext;
        }

        public bool IsReusable
        {
            get { return false; }
        }

        public void ProcessRequest(HttpContext context)
        {
            var browserTypName = context.Request.Browser.Browser;

            
            switch (browserTypName)
            {
                case "Chrome":
                    context.Response.Write("Chrome");
                    break;
                case "Firefox":
                    context.Response.Write("Firefox");
                    break;
                case "InternetExplorer":
                    context.Response.Write("InternetExplorer");
                    break;
                default:
                    context.Response.Write("Scheiße");
                    break;

            }


        }



       
    }
}
