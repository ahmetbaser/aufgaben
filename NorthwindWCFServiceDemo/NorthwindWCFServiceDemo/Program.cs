using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Description;
using System.Text;
using System.Threading.Tasks;

namespace NorthwindWCFServiceDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            Uri adresse = new Uri("http://172.26.0.45:9050/DemoService.svc");


            ServiceHost host = new ServiceHost(typeof(DemoService), adresse);
            ServiceMetadataBehavior mex = new ServiceMetadataBehavior();
            mex.HttpGetEnabled = true;
            host.Description.Behaviors.Add(mex);
            host.Open();



            Console.WriteLine("Warte auf Clientanfragen.....");
            Console.ReadLine();


        }
    }
}
