using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using NorthwindWCFServiceDemo.ViewModel;
using System.Threading.Tasks;

namespace NorthwindWCFServiceDemo
{
    // HINWEIS: Mit dem Befehl "Umbenennen" im Menü "Umgestalten" können Sie den Klassennamen "DemoService" sowohl im Code als auch in der Konfigurationsdatei ändern.
    public class DemoService : IDemoService
    {

        NorthwindEntities _db = null;
        public DemoService()
        {
            _db = new NorthwindEntities();
        }

        public ProductViewModel[] GetProductsByCategory(string CatName)
        {
            if (!String.IsNullOrEmpty(CatName))
            {
                try
                {
                    var cat = _db.Categories.Where(c => c.CategoryName.Equals(CatName)).Single();
                    return cat.Products.Select(p => new ProductViewModel
                    {
                        Name = p.ProductName,
                        Price = p.UnitPrice

                    }).ToArray();

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }

            return null;

        }

        public ProductViewModel[] GetProductsBySupplier(string SupName)
        {
            if (!String.IsNullOrEmpty(SupName))
            {
                try
                {
                    var result = _db.Products.Include("Suppliers").Where(a => a.Suppliers.CompanyName.Equals(SupName))
                                              .Select(vm => new ProductViewModel
                                              {
                                                  Name = vm.ProductName,
                                                  Price = vm.UnitPrice
                                              }).ToArray();
                    return result;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
            return null;
        }


        //OperationContext
        //public async Task<ProductViewModel[]> GetAsyncProductsBySupplier(string CatName)
        //{
        //    ProductViewModel[] array = null;

        //    var task = Task.Factory.StartNew(() =>
        //    {
        //        array = (_db.Products.Include("Suppliers").Where(a => a.Suppliers.CompanyName.Equals(CatName))
        //                                        .Select(vm => new ProductViewModel
        //                                        {
        //                                            Name = vm.ProductName,
        //                                            Price = vm.UnitPrice
        //                                        })).ToArray();

        //    });


        //    return await array;
        //}


    }
}
