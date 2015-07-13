using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace BLZWebServices
{

    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class BlzServices : System.Web.Services.WebService
    {

        TeachSQLEntities db = new TeachSQLEntities();
        public BlzServices()
        {

        }

        [WebMethod]
        public string GetData(string BLZ)
        {
            var b = db.BLZTabelle.SingleOrDefault(a => a.BLZ.Equals(BLZ));
            return String.Format("{0}\n{1}\n{2}\n{3}", b.Bezeichnung, b.BIC, b.PLZ, b.Ort);
        }

    }
}
