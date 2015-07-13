using NorthwindWCFServiceDemo.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace NorthwindWCFServiceDemo
{
    // HINWEIS: Mit dem Befehl "Umbenennen" im Menü "Umgestalten" können Sie den Schnittstellennamen "IDemoService" sowohl im Code als auch in der Konfigurationsdatei ändern.
    [ServiceContract]
    public interface IDemoService
    {
        [OperationContract]
        ProductViewModel[] GetProductsByCategory(String CatName);
        [OperationContract]
        ProductViewModel[] GetProductsBySupplier(String SupName);

        //Task<ProductViewModel[]> GetAsyncProductsBySupplier(String TestName);


    }
}
